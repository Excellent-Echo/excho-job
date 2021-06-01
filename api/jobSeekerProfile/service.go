package jobseekerprofile

import (
	"errors"
	"excho-job/entity"
	"excho-job/helper"
	"fmt"
	"strconv"
)

type Service interface{
	GetProfileByJobSeekerID(ID string) (entity.JobSeekerProfile, error)
	SaveNewProfile(pathFile string, id int) (entity.JobSeekerProfile, error)
	UpdateProfileByID(pathFile string, jobSeekerProfileID string) (entity.JobSeekerProfile, error)
}

type service struct {
	repository Repository
}

func NewService(repo Repository) *service{
	return &service{repo}
}

func (s *service) GetProfileByJobSeekerID(ID string) (entity.JobSeekerProfile, error) {
	jobSeekerProfil, err := s.repository.FindByUserID(ID)

	if err != nil {
		return jobSeekerProfil, err
	}

	return jobSeekerProfil, nil
}

func (s *service) SaveNewProfile(pathFile string, id int) (entity.JobSeekerProfile, error) {
	ID := strconv.Itoa(id)

	jobSeekerProfileCheck, _ := s.repository.FindByUserID(ID)

	if jobSeekerProfileCheck.JobSeekerID == id {
		errooStatus := fmt.Sprintf("job seeker profile for job seeker id %d has been created", id)
		return jobSeekerProfileCheck, errors.New(errooStatus)
	}

	newJobSeekerProfile := entity.JobSeekerProfile{
		Profile: pathFile,
		JobSeekerID: id,
	}

	jobSeekerProfile, err := s.repository.Create(newJobSeekerProfile)

	if err != nil {
		return jobSeekerProfile, err
	}

	return jobSeekerProfile, nil
}

func (s *service) UpdateProfileByID(pathFile string, jobSeekerProfileID string) (entity.JobSeekerProfile, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(jobSeekerProfileID); err != nil {
		return entity.JobSeekerProfile{}, err
	}

	dataUpdate["profile"] = pathFile

	// fmt.Println(dataUpdate)

	jobSeekerProfileUpdate, err := s.repository.UpdateByID(jobSeekerProfileID, dataUpdate)

	if err != nil {
		return jobSeekerProfileUpdate, err
	}

	return jobSeekerProfileUpdate, nil
}