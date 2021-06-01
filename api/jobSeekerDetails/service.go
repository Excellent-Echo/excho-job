package jobseekerdetails

import (
	"errors"
	"excho-job/entity"
	"fmt"
	"strconv"
)

type Service interface {
	SaveNewDetail(input entity.JobSeekerDetailInput, ID string) (entity.JobSeekerDetails, error)
	GetJobSeekerDetailByUserID(ID string) (entity.JobSeekerDetails, error)
}

type service struct {
	repository Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) SaveNewDetail(input entity.JobSeekerDetailInput, ID string) (entity.JobSeekerDetails, error) {
	IDUser, _ := strconv.Atoi(ID)

	checkStatus, err := s.repository.FindByJobSeekerID(ID)

	if err != nil {
		return checkStatus, err
	}

	if checkStatus.JobSeekerID == IDUser {
		errorStatus := fmt.Sprintf("Job Seeker detail for Job Seeker ID : %s has been created", ID)
		return checkStatus, errors.New(errorStatus)
	}

	var NewJobSeekerDetail = entity.JobSeekerDetails{
		NoHandphone: input.NoHandphone,
		Gender:      input.Gender,
		Address:     input.Address,
		Experience:  input.Experience,
		Education:   input.Education,
		Skills:      input.Skills,
		JobSeekerID: IDUser,
	}

	createJobSeekerDetail, err := s.repository.Create(NewJobSeekerDetail)

	if err != nil {
		return createJobSeekerDetail, err
	}

	return createJobSeekerDetail, nil
}

func (s *service) GetJobSeekerDetailByUserID(ID string) (entity.JobSeekerDetails, error) {
	jobSeekerDetail, err := s.repository.FindByJobSeekerID(ID)

	if err != nil {
		return jobSeekerDetail, err
	}

	if jobSeekerDetail.ID == 0 {
		errStatus := fmt.Sprintf("userdetail for user id %s not created", ID)
		return jobSeekerDetail, errors.New(errStatus)
	}

	return jobSeekerDetail, nil
}
