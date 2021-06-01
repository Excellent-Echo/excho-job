package migration

type JobSeeker struct {
	ID              int `gorm:"PrimaryKey"`
	FullName        string
	Email           string `gorm:"unique"`
	Password        string
	JobSeekerDetail JobSeekerDetails `gorm:"foreignKey:JobSeekerID"`
}

type JobSeekerDetails struct {
	ID          int `gorm:"PrimayKey"`
	NoHandphone int
	Gender      string
	Address     string
	Experience  string
	Education   string
	Skills      string
	Resume      string
	JobSeekerID int
}

type Hire struct {
	ID       int `gorm:"PrimaryKey"`
	FullName string
	Email    string `gorm:"unique"`
	Position string
	Password string
	Jobs     []Job `gorm:"foreignKey:HireID"`
}

type Job struct {
	ID             int `gorm:"PrimaryKey"`
	CompanyName    string
	Address        string
	Industry       string
	JobTittle      string
	Salary         int
	Type           string
	JobDescription string
	Requirements   string
	Skills         string
	HireID         int
}
