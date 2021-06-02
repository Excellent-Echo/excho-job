package resume

import (
	"errors"
	"excho-job/entity"
	"excho-job/helper"
	"fmt"
	"strconv"
)

type Service interface {
	GetResemuByJobSeekerID(ID string) (entity.Resume, error)
	SaveNewResume(pathFile string, ID int) (entity.Resume, error)
	UpdateResumeByID(pathFile string, userProfileID string) (entity.Resume, error)
}

type service struct {
	repository Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetResemuByJobSeekerID(ID string) (entity.Resume, error) {
	resume, err := s.repository.FindByUserID(ID)

	if err != nil {
		return resume, err
	}

	return resume, nil
}

func (s *service) SaveNewResume(pathFile string, id int) (entity.Resume, error) {
	ID := strconv.Itoa(id)

	resumeCheck, _ := s.repository.FindByUserID(ID)

	if resumeCheck.JobSeekerID == id {
		errooStatus := fmt.Sprintf("user profile for user id %d has been created", id)
		return resumeCheck, errors.New(errooStatus)
	}

	newResume := entity.Resume{
		Resume:      pathFile,
		JobSeekerID: id,
	}

	resumeJobSeeker, err := s.repository.Create(newResume)

	if err != nil {
		return resumeJobSeeker, err
	}

	return resumeJobSeeker, nil
}

func (s *service) UpdateResumeByID(pathFile string, userProfileID string) (entity.Resume, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(userProfileID); err != nil {
		return entity.Resume{}, err
	}

	dataUpdate["resume"] = pathFile

	// fmt.Println(dataUpdate)

	resumeUpdate, err := s.repository.UpdateByID(userProfileID, dataUpdate)

	if err != nil {
		return resumeUpdate, err
	}

	return resumeUpdate, nil
}
