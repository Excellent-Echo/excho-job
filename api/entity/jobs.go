package entity

type Job struct {
	ID             int    `gorm:"PrimaryKey"`
	CompanyName    string `json:"company_name"`
	Address        string `json:"address"`
	Industry       string `json:"industry"`
	JobTittle      string `json:"job_tittle"`
	Salary         int    `json:"salary"`
	Type           string `json:"type"`
	JobDescription string `json:"job_description"`
	Requirements   string `json:"requirements"`
	Location       string `json:"location"`
	Category       string `json:"category"`
	Skills         string `json:"skills"`
	HireID         int    `json:"hire_id"`
}

type JobInput struct {
	CompanyName    string `json:"company_name"`
	Address        string `json:"address"`
	Industry       string `json:"industry"`
	JobTittle      string `json:"job_tittle"`
	Salary         int    `json:"salary"`
	Type           string `json:"type"`
	JobDescription string `json:"job_description"`
	Requirements   string `json:"requirements"`
	Skills         string `json:"skills"`
	Location       string `json:"location"`
	Category       string `json:"category"`
}
