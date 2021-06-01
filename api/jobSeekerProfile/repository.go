package jobseekerprofile

import (
	"excho-job/entity"

	"gorm.io/gorm"
)

type Repository interface{
	FindByUserID(ID string) (entity.JobSeekerProfile, error)
	Create(jobSeekerProfile entity.JobSeekerProfile) (entity.JobSeekerProfile, error)
	UpdateByID(ID string, dataUpdate map[string]interface{}) (entity.JobSeekerProfile, error)
}

type repository struct{
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository{
	return &repository{db}
}

func(r *repository) FindByUserID(ID string) (entity.JobSeekerProfile, error) {
	var jobSeekerProfile entity.JobSeekerProfile

	if err := r.db.Where("job_seeker_id = ?", ID).Find(&jobSeekerProfile).Error; err != nil {
		return jobSeekerProfile, err
	}

	return jobSeekerProfile, nil
}

func(r *repository) Create(jobSeekerProfile entity.JobSeekerProfile) (entity.JobSeekerProfile, error) {
	if err := r.db.Create(&jobSeekerProfile).Error; err != nil {
		return jobSeekerProfile, err
	}

	return jobSeekerProfile, nil
}

func (r *repository) UpdateByID(ID string, dataUpdate map[string]interface{}) (entity.JobSeekerProfile, error) {
	var jobSeekerProfile entity.JobSeekerProfile

	if err := r.db.Model(&jobSeekerProfile).Where("id = ?", ID).Updates(dataUpdate).Error; err != nil {
		return jobSeekerProfile, err
	}

	if err := r.db.Where("id = ?", ID).Find(&jobSeekerProfile).Error; err != nil {
		return jobSeekerProfile, err
	}

	return jobSeekerProfile, nil
}
