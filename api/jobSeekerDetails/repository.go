package jobseekerdetails

import (
	"excho-job/entity"

	"gorm.io/gorm"
)

type Repository interface {
	Create(input entity.JobSeekerDetails) (entity.JobSeekerDetails, error)
	FindByJobSeekerID(ID string) (entity.JobSeekerDetails, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) Create(input entity.JobSeekerDetails) (entity.JobSeekerDetails, error) {
	if err := r.db.Create(&input).Error; err != nil {
		return input, err
	}
	return input, nil
}

func (r *repository) FindByJobSeekerID(ID string) (entity.JobSeekerDetails, error) {
	var jobSeekerDetail entity.JobSeekerDetails

	if err := r.db.Where("job_seeker_id = ?", ID).Find(&jobSeekerDetail).Error; err != nil {
		return jobSeekerDetail, err
	}
	return jobSeekerDetail, nil
}
