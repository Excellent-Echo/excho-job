package jobseekerdetails

import (
	"errors"
	"excho-job/entity"
	"excho-job/helper"
	"fmt"
	"strconv"
)

type Service interface {
	GetAllJobSeekerDetails() ([]JobSeekerDetailsFormat, error)
	SaveNewDetail(input entity.JobSeekerDetailInput, ID string) (entity.JobSeekerDetails, error)
	UpdateDetailsByJobSeekerID(id string, dataInput entity.JobSeekerDetailInput) (JobSeekerDetailsFormat, error)
}

type service struct {
	repository Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetAllJobSeekerDetails() ([]JobSeekerDetailsFormat, error) {
	jobSeekerDetails, err := s.repository.FindAll()

	var formatJobSeekerDetails []JobSeekerDetailsFormat

	for _, jobSeekerDetail := range jobSeekerDetails {
		formatJobSeekerDetail := FormatJobSeekerDetails(jobSeekerDetail)
		formatJobSeekerDetails = append(formatJobSeekerDetails, formatJobSeekerDetail)
	}

	if err != nil {
		return formatJobSeekerDetails, err
	}
	return formatJobSeekerDetails, nil
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

func (s *service) UpdateDetailsByJobSeekerID(id string, dataInput entity.JobSeekerDetailInput) (JobSeekerDetailsFormat, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(id); err != nil {
		return JobSeekerDetailsFormat{}, err
	}

	jobSeeker, err := s.repository.FindByJobSeekerID(id)

	if err != nil {
		return JobSeekerDetailsFormat{}, err
	}

	if jobSeeker.ID == 0 {
		return JobSeekerDetailsFormat{}, errors.New("job Seeker id not found")
	}

	if strconv.Itoa(dataInput.NoHandphone) != "" || len(strconv.Itoa(dataInput.NoHandphone)) != 0 {
		dataUpdate["no_handphone"] = dataInput.NoHandphone
	}
	if dataInput.Gender != "" || len(dataInput.Gender) != 0 {
		dataUpdate["gender"] = dataInput.Gender
	}
	if dataInput.Address != "" || len(dataInput.Address) != 0 {
		dataUpdate["address"] = dataInput.Address
	}
	if dataInput.Experience != "" || len(dataInput.Experience) != 0 {
		dataUpdate["experience"] = dataInput.Experience
	}
	if dataInput.Skills != "" || len(dataInput.Skills) != 0 {
		dataUpdate["skills"] = dataInput.Skills
	}

	jobSeekerUpdated, err := s.repository.UpdateByJobSeekerID(id, dataUpdate)

	if err != nil {
		return JobSeekerDetailsFormat{}, err
	}

	formatJobSeekerDetail := FormatJobSeekerDetails(jobSeekerUpdated)

	return formatJobSeekerDetail, nil
}
