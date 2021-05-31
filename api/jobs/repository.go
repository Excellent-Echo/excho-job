package jobs

import (
	"excho-job/entity"

	"gorm.io/gorm"
)

type Repository interface{
	FindAll() ([]entity.Job, error)
	Create(job entity.Job) (entity.Job, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func(r *repository) FindAll() ([]entity.Job, error) {
	var jobs []entity.Job

	if err := r.db.Find(&jobs).Error; err != nil {
		return jobs, err
	}
	return jobs, nil
}

func(r *repository) Create(job entity.Job) (entity.Job, error) {
	if err := r.db.Create(&job).Error; err != nil {
		return job, err
	}
	return job, nil
}