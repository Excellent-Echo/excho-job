package entity

type JobSeekerDetails struct {
	ID int `gorm:"PrimayKey" json:"id"`
	NoHandphone int `json:"no_handphone"`
	Gender string `json:"gender"`
	Address string `json:"address"`
	Experience string `json:"experience"`
	Education string `json:"education"`
	Skills string `json:"skills"`
	// Resume string `json:"resume"`
	JobSeekerID int `json:"job_seeker_id"`
}

type JobSeekerDetailInput struct{
	NoHandphone int `json:"no_handphone" binding:"required"`
	Gender string `json:"gender" binding:"required"`
	Address string `json:"address" binding:"required"`
	Experience string `json:"experience" binding:"required"`
	Education string `json:"education" binding:"required"`
	Skills string `json:"skills" binding:"required"`
	// Resume string `json:"resume"`
}