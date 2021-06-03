package applyjobs

import (
	"excho-job/entity"
	"strconv"
)

type Service interface {
	GetAllApplyJob() ([]entity.ApplyJobs, error)
	SaveNewApplyJobs(applyJobs entity.ApplyJobs, jobID string, JobSeekerID string) (entity.ApplyJobs, error)
	GetApplyJobByJobSeekerID(ID string) ([]entity.ApplyJobs, error)
}

type service struct {
	repository Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetAllApplyJob() ([]entity.ApplyJobs, error) {
	applyJobs, err := s.repository.FindAll()

	var formatApplyJobs []entity.ApplyJobs

	formatApplyJobs = append(formatApplyJobs, applyJobs...)

	if err != nil {
		return formatApplyJobs, err
	}

	return formatApplyJobs, nil
}

func (s *service) SaveNewApplyJobs(applyJobs entity.ApplyJobs, jobID string, JobSeekerID string) (entity.ApplyJobs, error) {
	IDJob, _ := strconv.Atoi(jobID)
	IDJobSeeker, _ := strconv.Atoi(JobSeekerID)

	var newApplyJobs = entity.ApplyJobs{
		JobID:       IDJob,
		JobSeekerID: IDJobSeeker,
	}

	createApplyJobs, err := s.repository.Create(newApplyJobs)

	if err != nil {
		return createApplyJobs, err
	}

	return createApplyJobs, nil
}

func (s *service) GetApplyJobByJobSeekerID(ID string) ([]entity.ApplyJobs, error) {
	applyJobs, err := s.repository.FindByJobSeekerID(ID)

	var formatApplyJobs []entity.ApplyJobs

	formatApplyJobs = append(formatApplyJobs, applyJobs...)

	if err != nil {
		return formatApplyJobs, err
	}

	return formatApplyJobs, nil
}
