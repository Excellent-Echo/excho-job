package jobseekerdetails

import "excho-job/entity"

type JobSeekerDetailsFormat struct{
	ID int `gorm:"PrimayKey" json:"id"`
	NoHandphone int `json:"no_handphone"`
	Gender string `json:"gender"`
	Address string `json:"address"`
	Experience string `json:"experience"`
	Education string `json:"education"`
	Skills string `json:"skills"`
}

func FormatJobSeekerDetails(jobSeekerDetails entity.JobSeekerDetails) JobSeekerDetailsFormat{
	var formatJobSeekerDetails = JobSeekerDetailsFormat{
		ID: jobSeekerDetails.ID,
		NoHandphone: jobSeekerDetails.NoHandphone,
		Gender: jobSeekerDetails.Gender,
		Address: jobSeekerDetails.Address,
		Experience: jobSeekerDetails.Experience,
		Education: jobSeekerDetails.Education,
		Skills: jobSeekerDetails.Skills,
	}
	return formatJobSeekerDetails
}
