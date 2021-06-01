package jobSeeker

import (
	"errors"
	"excho-job/entity"

	"golang.org/x/crypto/bcrypt"
)

type Service interface {
	SaveNewJobSeeker(jobSeeker entity.JobSeekerInput) (JobSeekerFormat, error)
	LoginJobSeeker(input entity.InputLoginJobSeeker) (entity.JobSeeker, error)
}

type service struct {
	repository Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) SaveNewJobSeeker(jobSeeker entity.JobSeekerInput) (JobSeekerFormat, error) {
	genPassword, err := bcrypt.GenerateFromPassword([]byte(jobSeeker.Password), bcrypt.MinCost)

	if err != nil {
		return JobSeekerFormat{}, err
	}

	var newJobSeeker = entity.JobSeeker{
		FullName: jobSeeker.FullName,
		Email:    jobSeeker.Email,
		Password: string(genPassword),
	}

	createJobSeeker, err := s.repository.Create(newJobSeeker)

	formatJobseeker := FormatJobSeeker(createJobSeeker)
	if err != nil {
		return formatJobseeker, err
	}
	return formatJobseeker, nil
}

func (s *service) LoginJobSeeker(input entity.InputLoginJobSeeker) (entity.JobSeeker, error) {
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
