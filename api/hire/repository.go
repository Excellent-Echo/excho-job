package hire

import (
	"excho-job/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindAll() ([]entity.Hire, error)
	Create(hire entity.Hire) (entity.Hire, error)
	FindByID(ID string) (entity.Hire, error)
	FindByEmail(email string) (entity.Hire, error)
	UpdateByID(id string, dataUpdate map[string]interface{}) (entity.Hire, error)
	DeleteByID(id string) (string, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) Create(hire entity.Hire) (entity.Hire, error) {
	if err := r.db.Create(&hire).Error; err != nil {
		return hire, err
	}
	return hire, nil
}

func (r *repository) FindByID(ID string) (entity.Hire, error) {
	var hire entity.Hire

	if err := r.db.Where("id = ?", ID).Find(&hire).Error; err != nil {
		return hire, err
	}

	return hire, nil
}

func (r *repository) FindByEmail(email string) (entity.Hire, error) {
	var hire entity.Hire

	if err := r.db.Where("email = ?", email).Find(&hire).Error; err != nil {
		return hire, err
	}
	return hire, nil
}

func (r *repository) FindAll() ([]entity.Hire, error) {
	var hire []entity.Hire

	if err := r.db.Find(&hire).Error; err != nil {
		return hire, err
	}

	return hire, nil
}
func (r *repository) UpdateByID(id string, dataUpdate map[string]interface{}) (entity.Hire, error) {
	var hire entity.Hire

	if err := r.db.Where("id = ?", id).Find(&hire).Error; err != nil {
		return hire, err
	}

	if err := r.db.Model(&hire).Where("id = ?", id).Updates(dataUpdate).Error; err != nil {
		return hire, err
	}

	return hire, nil
}

func (r *repository) DeleteByID(id string) (string, error) {
	if err := r.db.Where("id = ?", id).Delete(&entity.Hire{}).Error; err != nil {
		return "error", err
	}
	return "success", nil
}
