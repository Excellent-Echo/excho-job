package hire

import (
	"errors"
	"excho-job/entity"
	"excho-job/helper"
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

type Service interface {
	GetAllHire() ([]HireFormat, error)
	SaveNewHire(hireInput entity.HireInput) (HireFormat, error)
	LoginHire(input entity.InputLoginHire) (entity.Hire, error)
	UpdateHireByID(id string, dataInput entity.UpdateHireInput) (HireFormat, error)
	DeleteHireID(id string) (interface{}, error)
}

type service struct {
	repository Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetAllHire() ([]HireFormat, error) {
	// Find all data hire from database
	Hires, err := s.repository.FindAll()

	//formating hire
	var formatHires []HireFormat

	for _, hire := range Hires {
		formatHire := FormatHire(hire)
		formatHires = append(formatHires, formatHire)
	}

	if err != nil {
		return formatHires, err
	}

	return formatHires, nil
}

func (s *service) SaveNewHire(hireInput entity.HireInput) (HireFormat, error) {
	genPasswrod, err := bcrypt.GenerateFromPassword([]byte(hireInput.Password), bcrypt.MinCost)
	if err != nil {
		return HireFormat{}, err
	}

	var newHire = entity.Hire{
		FullName: hireInput.FullName,
		Email:    hireInput.Email,
		Position: hireInput.Position,
		Password: string(genPasswrod),
	}

	createHire, err := s.repository.Create(newHire)

	formatHire := FormatHire(createHire)

	if err != nil {
		return formatHire, err
	}
	return formatHire, nil
}

func (s *service) LoginHire(input entity.InputLoginHire) (entity.Hire, error) {
	hire, err := s.repository.FindByEmail(input.Email)

	if err != nil {
		return hire, err
	}

	if hire.ID == 0 {
		return hire, errors.New("user not found")
	}

	//checking password
	if err := bcrypt.CompareHashAndPassword([]byte(hire.Password), []byte(input.Password)); err != nil {
		return hire, errors.New("password invalid")
	}
	return hire, nil
}

func (s *service) UpdateHireByID(id string, dataInput entity.UpdateHireInput) (HireFormat, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(id); err != nil {
		return HireFormat{}, err
	}

	hire, err := s.repository.FindByID(id)

	if err != nil {
		return HireFormat{}, err
	}

	if hire.ID == 0 {
		return HireFormat{}, errors.New("hire id not found")
	}

	if dataInput.FullName != "" || len(dataInput.FullName) != 0 {
		dataUpdate["full_name"] = dataInput.FullName
	}
	if dataInput.Email != "" || len(dataInput.Email) != 0 {
		dataUpdate["email"] = dataInput.Email
	}
	if dataInput.Position != "" || len(dataInput.Position) != 0 {
		dataUpdate["position"] = dataInput.Position
	}

	hireUpdated, err := s.repository.UpdateByID(id, dataUpdate)

	if err != nil {
		return HireFormat{}, err
	}

	formatHire := FormatHire(hireUpdated)

	return formatHire, nil
}

func (s *service) DeleteHireID(id string) (interface{}, error) {
	if err := helper.ValidateIDNumber(id); err != nil {
		return nil, err
	}

	hire, err := s.repository.FindByID(id)

	if err != nil {
		return nil, err
	}
	if hire.ID == 0 {
		return nil, errors.New("hire id not found")
	}

	status, err := s.repository.DeleteByID(id)
	if err != nil {
		return nil, errors.New("error delete in internal server")
	}

	if status == "error" {
		return nil, errors.New("error delete in internal server")
	}

	msg := fmt.Sprintf("success delete user ID : %s", id)
	formatDelete := FormatDeleteUser(msg)

	return formatDelete, nil
}
