package migration

type JobSeeker struct {
	ID               int `gorm:"PrimaryKey"`
	FullName         string
	Email            string `gorm:"unique"`
	Password         string
	JobSeekerDetail  JobSeekerDetails `gorm:"foreignKey:JobSeekerID"`
	JobSeekerResume  Resume           `gorm:"foreignKey:JobSeekerID"`
	JobSeekerProfile JobSeekerProfile `gorm:"foreignKey:JobSeekerID"`
	Jobs             []*Job           `gorm:"many2many:apply_jobs"`
}

type JobSeekerDetails struct {
	ID          int `gorm:"PrimayKey"`
	NoHandphone int
	Gender      string
	Address     string
	Experience  string
	Education   string
	Skills      string
	// Resume string
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
	Location       string
	Category       string
	HireID         int
	JobProfile     JobProfile   `gorm:"foreignKey:JobID"`
	JobSeeker      []*JobSeeker `gorm:"many2many:apply_jobs"`
}

type Resume struct {
	ID          int `gorm:"PrimaryKey"`
	Resume      string
	JobSeekerID int
}

type JobSeekerProfile struct {
	ID          int `gorm:"PrimaryKey"`
	Profile     string
	JobSeekerID int
}

type JobProfile struct {
	ID      int `gorm:"PrimaryKey"`
	Profile string
	JobID   int
}
