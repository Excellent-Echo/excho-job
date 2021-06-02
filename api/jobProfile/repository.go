package jobprofile

import (
	"excho-job/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindByUserID(ID string) (entity.JobProfile, error)
	Create(profile entity.JobProfile) (entity.JobProfile, error)
	UpdateByID(ID string, dataUpdate map[string]interface{}) (entity.JobProfile, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindByUserID(ID string) (entity.JobProfile, error) {
	var jobProfile entity.JobProfile

	if err := r.db.Where("job_id = ?", ID).Find(&jobProfile).Error; err != nil {
		return jobProfile, err
	}

	return jobProfile, nil
}

func (r *repository) Create(profile entity.JobProfile) (entity.JobProfile, error) {
	if err := r.db.Create(&profile).Error; err != nil {
		return profile, err
	}

	return profile, nil
}

func (r *repository) UpdateByID(ID string, dataUpdate map[string]interface{}) (entity.JobProfile, error) {
	var jobProfile entity.JobProfile

	if err := r.db.Model(&jobProfile).Where("id = ?", ID).Updates(dataUpdate).Error; err != nil {
		return jobProfile, err
	}

	if err := r.db.Where("id = ?", ID).Find(&jobProfile).Error; err != nil {
		return jobProfile, err
	}

	return jobProfile, nil
}
