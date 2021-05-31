package hire

import (
	"errors"
	"excho-job/entity"

	"golang.org/x/crypto/bcrypt"
)

type Service interface{
	SaveNewHire(hireInput entity.HireInput) (HireFormat, error)
	LoginJobSeeker(input entity.InputLoginHire) (entity.Hire, error)
}

type service struct{
	repository Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func(s *service) SaveNewHire(hireInput entity.HireInput) (HireFormat, error) {
	genPasswrod, err := bcrypt.GenerateFromPassword([]byte(hireInput.Password), bcrypt.MinCost)
	if err != nil {
		return HireFormat{}, err
	}

	var newHire = entity.Hire{
		FullName: hireInput.FullName,
		Email: hireInput.Email,
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

func (s *service) LoginJobSeeker(input entity.InputLoginHire) (entity.Hire, error) {
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
