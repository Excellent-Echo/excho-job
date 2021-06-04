package jobs

import (
	"excho-job/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindAll() ([]entity.Job, error)
	Create(job entity.Job) (entity.Job, error)
	FindByID(ID string) (entity.Job, error)
	FindByHireID(ID string) ([]entity.Job, error)
	FindByLocation(location string) (entity.Job, error)
	FindByCategory(category string) (entity.Job, error)
	FindByType(Type string) (entity.Job, error)
	UpdateByID(id string, dataUpdate map[string]interface{}) (entity.Job, error)
	DeleteByID(id string) (string, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindAll() ([]entity.Job, error) {
	var jobs []entity.Job

	if err := r.db.Find(&jobs).Error; err != nil {
		return jobs, err
	}
	return jobs, nil
}

func (r *repository) Create(job entity.Job) (entity.Job, error) {
	if err := r.db.Create(&job).Error; err != nil {
		return job, err
	}
	return job, nil
}

func (r *repository) FindByHireID(ID string) ([]entity.Job, error) {
	var job []entity.Job

	if err := r.db.Where("hire_id = ?", ID).Find(&job).Error; err != nil {
		return job, err
	}

	return job, nil
}

func (r *repository) FindByID(ID string) (entity.Job, error) {
	var job entity.Job

	if err := r.db.Where("id = ?", ID).Find(&job).Error; err != nil {
		return job, err
	}

	return job, nil
}

func (r *repository) FindByLocation(location string) (entity.Job, error) {
	var job entity.Job

	if err := r.db.Where("location = ?", location).Find(&job).Error; err != nil {
		return job, err
	}

	return job, nil
}

func (r *repository) FindByCategory(category string) (entity.Job, error) {
	var job entity.Job

	if err := r.db.Where("category = ?", category).Find(&job).Error; err != nil {
		return job, err
	}

	return job, nil
}

func (r *repository) FindByType(Type string) (entity.Job, error) {
	var job entity.Job

	if err := r.db.Where("type = ?", Type).Find(&job).Error; err != nil {
		return job, err
	}

	return job, nil
}

func (r *repository) UpdateByID(id string, dataUpdate map[string]interface{}) (entity.Job, error) {
	var job entity.Job

	if err := r.db.Where("id = ?", id).Find(&job).Error; err != nil {
		return job, err
	}

	if err := r.db.Model(&job).Where("id = ?", id).Updates(dataUpdate).Error; err != nil {
		return job, err
	}

	return job, nil
}

func (r *repository) DeleteByID(id string) (string, error) {
	if err := r.db.Where("id = ?", id).Delete(&entity.JobSeeker{}).Error; err != nil {
		return "error", err
	}
	return "success", nil
}
