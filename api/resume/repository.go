package resume

import (
	"excho-job/entity"

	"gorm.io/gorm"
)

type Repository interface{
	FindByUserID(ID string) (entity.Resume, error)
	Create(resume entity.Resume) (entity.Resume, error)
	UpdateByID(ID string, dataUpdate map[string]interface{}) (entity.Resume, error)
}

type repository struct{
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository{
	return &repository{db}
}

func(r *repository) FindByUserID(ID string) (entity.Resume, error) {
	var resume entity.Resume

	if err := r.db.Where("job_seeker_id = ?", ID).Find(&resume).Error; err != nil {
		return resume, err
	}

	return resume, nil
}

func(r *repository) Create(resume entity.Resume) (entity.Resume, error) {
	if err := r.db.Create(&resume).Error; err != nil {
		return resume, err
	}

	return resume, nil
}

func (r *repository) UpdateByID(ID string, dataUpdate map[string]interface{}) (entity.Resume, error) {
	var resume entity.Resume

	if err := r.db.Model(&resume).Where("job_seeker_id = ?", ID).Updates(dataUpdate).Error; err != nil {
		return resume, err
	}

	if err := r.db.Where("id = ?", ID).Find(&resume).Error; err != nil {
		return resume, err
	}

	return resume, nil
}
