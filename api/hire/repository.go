package hire

import (
	"excho-job/entity"

	"gorm.io/gorm"
)

type Repository interface{
	Create(hire entity.Hire) (entity.Hire, error)
	FindByEmail(email string) (entity.Hire, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository{
	return &repository{db}
}

func(r *repository) Create(hire entity.Hire) (entity.Hire, error) {
	if err := r.db.Create(&hire).Error; err != nil {
		return hire, err
	}
	return hire, nil
}

func(r *repository) FindByEmail(email string) (entity.Hire, error) {
	var hire entity.Hire

	if err := r.db.Where("email = ?", email).Find(&hire).Error; err != nil {
		return hire, err
	}
	return hire, nil
}

