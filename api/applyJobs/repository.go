package applyjobs

import (
	"excho-job/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindAll() ([]entity.ApplyJobs, error)
	Create(applyJobs entity.ApplyJobs) (entity.ApplyJobs, error)
	FindByJobSeekerID(ID string) ([]entity.ApplyJobs, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindAll() ([]entity.ApplyJobs, error) {
	var applyJobs []entity.ApplyJobs

	if err := r.db.Find(&applyJobs).Error; err != nil {
		return applyJobs, err
	}
	return applyJobs, nil
}

func (r *repository) Create(applyJobs entity.ApplyJobs) (entity.ApplyJobs, error) {
	if err := r.db.Create(&applyJobs).Error; err != nil {
		return applyJobs, err
	}
	return applyJobs, nil
}

func (r *repository) FindByJobSeekerID(ID string) ([]entity.ApplyJobs, error) {
	var applyJobs []entity.ApplyJobs

	if err := r.db.Where("job_seeker_id = ?", ID).Find(&applyJobs).Error; err != nil {
		return applyJobs, err
	}

	return applyJobs, nil
}
