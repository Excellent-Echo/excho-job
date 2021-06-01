package jobSeeker

import (
	"excho-job/entity"

	"gorm.io/gorm"
)

type Repository interface {
	Create(jobSeeker entity.JobSeeker) (entity.JobSeeker, error)
	FindByEmail(email string) (entity.JobSeeker, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) Create(jobSeeker entity.JobSeeker) (entity.JobSeeker, error) {
	if err := r.db.Create(&jobSeeker).Error; err != nil {
		return jobSeeker, err
	}
	return jobSeeker, nil
}

func (r *repository) FindByEmail(email string) (entity.JobSeeker, error) {
	var jobSeeker entity.JobSeeker

	if err := r.db.Where("email = ?", email).Find(&jobSeeker).Error; err != nil {
		return jobSeeker, err
	}
	return jobSeeker, nil
}
