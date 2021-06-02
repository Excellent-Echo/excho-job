package jobseekerdetails

import (
	"excho-job/entity"

	"gorm.io/gorm"
)

type Repository interface{
	FindAll() ([]entity.JobSeekerDetails, error)
	Create(input entity.JobSeekerDetails) (entity.JobSeekerDetails, error)
	FindByJobSeekerID(ID string) (entity.JobSeekerDetails, error)
	UpdateByJobSeekerID(id string, dataUpdate map[string]interface{}) (entity.JobSeekerDetails, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindAll() ([]entity.JobSeekerDetails, error) {
	var users []entity.JobSeekerDetails

	if err := r.db.Find(&users).Error; err != nil {
		return users, err
	}
	return users, nil
}

func(r *repository) Create(input entity.JobSeekerDetails) (entity.JobSeekerDetails, error) {
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

func (r *repository) UpdateByJobSeekerID(id string, dataUpdate map[string]interface{}) (entity.JobSeekerDetails, error) {
	var jobSeekerDetails entity.JobSeekerDetails

	if err := r.db.Model(&jobSeekerDetails).Where("job_seeker_id = ?", id).Updates(dataUpdate).Error; err != nil {
		return jobSeekerDetails, err
	}

	if err := r.db.Where("job_seeker_id = ?", id).Find(&jobSeekerDetails).Error; err != nil {
		return jobSeekerDetails, err
	}

	return jobSeekerDetails, nil
}
