package entity

type JobSeeker struct {
	ID int `gorm:"PrimaryKey" json:"id"`
	FullName string `json:"full_name"`
	Email string `gorm:"unique" json:"email"`
	Password string `json:"-"`
}

type JobSeekerInput struct {
	FullName string `json:"full_name" binding:"required"`
	Email string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type InputLoginJobSeeker struct {
	Email string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type UpdateJobSeekerInput struct{
	FullName string `json:"full_name" binding:"required"`
	Email string `json:"email" binding:"required"`
}
