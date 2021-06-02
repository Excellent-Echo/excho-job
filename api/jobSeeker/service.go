package jobSeeker

import (
	"errors"
	"excho-job/entity"
	"excho-job/helper"
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

type Service interface {
	GetAllJobSeeker() ([]JobSeekerFormat, error)
	GetJobSeekerByID(ID string) (JobSeekerFormat, error)
	SaveNewJobSeeker(jobSeeker entity.JobSeekerInput) (JobSeekerFormat, error)
	LoginJobSeeker(input entity.InputLoginJobSeeker) (entity.JobSeeker, error)
	UpdateJobSeekerByID(id string, dataInput entity.UpdateJobSeekerInput) (JobSeekerFormat, error)
	DeleteByJobSeekerID(id string) (interface{}, error)
}

type service struct {
	repository Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

// function for Get All data Job seeker
func (s *service) GetAllJobSeeker() ([]JobSeekerFormat, error) {
	// Find all data job seeker from database
	jobSeekers, err := s.repository.FindAll()

	//formating job seeker
	var formatJobSeekers []JobSeekerFormat

	for _, jobSeeker := range jobSeekers {
		formatJobSeeker := FormatJobSeeker(jobSeeker)
		formatJobSeekers = append(formatJobSeekers, formatJobSeeker)
	}

	if err != nil {
		return formatJobSeekers, err
	}

	return formatJobSeekers, nil
}

// function for get job seeker data by id
func (s *service) GetJobSeekerByID(ID string) (JobSeekerFormat, error) {
	// validate input ID is not negative number
	if err := helper.ValidateIDNumber(ID); err != nil {
		return JobSeekerFormat{}, err
	}

	jobSeeker, err := s.repository.FindByID(ID)

	if err != nil {
		return JobSeekerFormat{}, err
	}

	if jobSeeker.ID == 0 {
		return JobSeekerFormat{}, errors.New("job seeker id not found")
	}
	formatJobSeeker := FormatJobSeeker(jobSeeker)
	return formatJobSeeker, nil
}

// function for create new Job Seeker
func (s *service) SaveNewJobSeeker(jobSeeker entity.JobSeekerInput) (JobSeekerFormat, error) {

	//generate password with bcrypt
	genPassword, err := bcrypt.GenerateFromPassword([]byte(jobSeeker.Password), bcrypt.MinCost)

	if err != nil {
		return JobSeekerFormat{}, err
	}

	// Fill value into entity.jobseeker
	var newJobSeeker = entity.JobSeeker{
		FullName: jobSeeker.FullName,
		Email:    jobSeeker.Email,
		Password: string(genPassword),
	}

	// creating new job seeker in database
	createJobSeeker, err := s.repository.Create(newJobSeeker)

	formatJobseeker := FormatJobSeeker(createJobSeeker)
	if err != nil {
		return formatJobseeker, err
	}
	return formatJobseeker, nil
}

// function for login job seeker
func (s *service) LoginJobSeeker(input entity.InputLoginJobSeeker) (entity.JobSeeker, error) {
	// find job seeker by email
	jobSeeker, err := s.repository.FindByEmail(input.Email)

	if err != nil {
		return jobSeeker, err
	}

	if jobSeeker.ID == 0 {
		return jobSeeker, errors.New("user not found")
	}

	//checking password
	if err := bcrypt.CompareHashAndPassword([]byte(jobSeeker.Password), []byte(input.Password)); err != nil {
		return jobSeeker, errors.New("password invalid")
	}
	return jobSeeker, nil
}

// function for update data job seeker by id
func (s *service) UpdateJobSeekerByID(id string, dataInput entity.UpdateJobSeekerInput) (JobSeekerFormat, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(id); err != nil {
		return JobSeekerFormat{}, err
	}

	jobSeeker, err := s.repository.FindByID(id)

	if err != nil {
		return JobSeekerFormat{}, err
	}

	if jobSeeker.ID == 0 {
		return JobSeekerFormat{}, errors.New("job Seeker id not found")
	}

	if dataInput.FullName != "" || len(dataInput.FullName) != 0 {
		dataUpdate["full_name"] = dataInput.FullName
	}
	if dataInput.Email != "" || len(dataInput.Email) != 0 {
		dataUpdate["email"] = dataInput.Email
	}

	jobSeekerUpdated, err := s.repository.UpdateByID(id, dataUpdate)

	if err != nil {
		return JobSeekerFormat{}, err
	}

	formatJobSeeker := FormatJobSeeker(jobSeekerUpdated)

	return formatJobSeeker, nil
}

// function for delete job seeker user by id
func (s *service) DeleteByJobSeekerID(id string) (interface{}, error) {
	if err := helper.ValidateIDNumber(id); err != nil {
		return nil, err
	}

	jobSeeker, err := s.repository.FindByID(id)

	if err != nil {
		return nil, err
	}
	if jobSeeker.ID == 0 {
		return nil, errors.New("jobSeeker id not found")
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
