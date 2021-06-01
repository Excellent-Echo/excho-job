package jobprofile

import (
	"errors"
	"excho-job/entity"
	"excho-job/helper"
	"fmt"
	"strconv"
)

type Service interface{
	GetJobProfileByJobID(ID string) (entity.JobProfile, error)
	SaveNewJobProfile(pathFile string, ID int) (entity.JobProfile, error)
	UpdateJobProfileByID(pathFile string, jobID string) (entity.JobProfile, error)
}

type service struct {
	repository Repository
}

func NewService(repo Repository) *service{
	return &service{repo}
}

func (s *service) GetJobProfileByJobID(ID string) (entity.JobProfile, error) {
	jobProfile, err := s.repository.FindByUserID(ID)

	if err != nil {
		return jobProfile, err
	}

	return jobProfile, nil
}

func (s *service) SaveNewJobProfile(pathFile string, id int) (entity.JobProfile, error) {
	ID := strconv.Itoa(id)

	jobProfileCheck, _ := s.repository.FindByUserID(ID)

	if jobProfileCheck.JobID == id {
		errooStatus := fmt.Sprintf("user profile for user id %d has been created", id)
		return jobProfileCheck, errors.New(errooStatus)
	}

	newJobProfile := entity.JobProfile{
		Profile: pathFile,
		JobID: id,
	}

	jobProfile, err := s.repository.Create(newJobProfile)

	if err != nil {
		return jobProfile, err
	}

	return jobProfile, nil
}

func (s *service) UpdateJobProfileByID(pathFile string, jobID string) (entity.JobProfile, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(jobID); err != nil {
		return entity.JobProfile{}, err
	}

	dataUpdate["profile"] = pathFile

	// fmt.Println(dataUpdate)

	profileUpdate, err := s.repository.UpdateByID(jobID, dataUpdate)

	if err != nil {
		return profileUpdate, err
	}

	return profileUpdate, nil
}