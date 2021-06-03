package entity

type Hire struct {
	ID       int    `gorm:"PrimaryKey"`
	FullName string `json:"full_name"`
	Email    string `gorm:"unique" json:"email"`
	Position string `json:"position"`
	Password string `json:"password"`
}

type HireInput struct {
	FullName string `json:"full_name"`
	Email    string `json:"email"`
	Position string `json:"position"`
	Password string `json:"password"`
}

type InputLoginHire struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type UpdateHireInput struct {
	FullName string `json:"full_name"`
	Email    string `json:"email"`
	Position string `json:"position"`
}

type HireByIdOutput struct {
	ID       int    `json:"id"`
	FullName string `json:"full_name"`
	Email    string `json:"email"`
	Position string `json:"position"`
	Jobs     []Job  `json:"jobs"`
}
