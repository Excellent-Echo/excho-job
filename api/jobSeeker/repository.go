package jobSeeker

import (
	"excho-job/entity"
	"fmt"

	"gorm.io/gorm"
)

type Repository interface {
	FindAll() ([]entity.JobSeeker, error)
	Create(jobSeeker entity.JobSeeker) (entity.JobSeeker, error)
	FindByID(ID string) (entity.JobSeeker, error)
	FindByEmail(email string) (entity.JobSeeker, error)
	UpdateByID(id string, dataUpdate map[string]interface{}) (entity.JobSeeker, error)
	DeleteByID(id string) (string, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

// function for find all job seeker data from database
func (r *repository) FindAll() ([]entity.JobSeeker, error) {
	var jobSeeker []entity.JobSeeker

	if err := r.db.Find(&jobSeeker).Error; err != nil {
		return jobSeeker, err
	}

	return jobSeeker, nil
}

// function for creating new job seeker user
func (r *repository) Create(jobSeeker entity.JobSeeker) (entity.JobSeeker, error) {
	if err := r.db.Create(&jobSeeker).Error; err != nil {
		return jobSeeker, err
	}
	return jobSeeker, nil
}

// function for find job seeker by id
func (r *repository) FindByID(ID string) (entity.JobSeeker, error) {
	var jobSeeker entity.JobSeeker

	if err := r.db.Where("id = ?", ID).Find(&jobSeeker).Error; err != nil {
		return jobSeeker, err
	}

	return jobSeeker, nil
}

// function for find job seeker by email, this function will be use for login
func (r *repository) FindByEmail(email string) (entity.JobSeeker, error) {
	var jobSeeker entity.JobSeeker

	if err := r.db.Where("email = ?", email).Find(&jobSeeker).Error; err != nil {
		return jobSeeker, err
	}
	return jobSeeker, nil
}

// function for update job seeker data by id
func (r *repository) UpdateByID(id string, dataUpdate map[string]interface{}) (entity.JobSeeker, error) {
	var jobSeeker entity.JobSeeker

	if err := r.db.Where("id = ?", id).Find(&jobSeeker).Error; err != nil {
		return jobSeeker, err
	}

	if err := r.db.Model(&jobSeeker).Where("id = ?", id).Updates(dataUpdate).Error; err != nil {
		return jobSeeker, err
	}

	fmt.Println(jobSeeker)

	return jobSeeker, nil
}

// function for delete job seeker user by id
func (r *repository) DeleteByID(id string) (string, error) {
	if err := r.db.Where("id = ?", id).Delete(&entity.JobSeeker{}).Error; err != nil {
		return "error", err
	}
	return "success", nil
}
