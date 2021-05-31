package jobSeeker

import "excho-job/entity"

type JobSeekerFormat struct {
	ID int `json:"id"`
	FullName string `json:"full_name"`
	Email string `json:"email"`
}

func FormatJobSeeker(JobSeeker entity.JobSeeker) JobSeekerFormat {
	var formatJobSeeker = JobSeekerFormat{
		ID: JobSeeker.ID,
		FullName: JobSeeker.FullName,
		Email: JobSeeker.Email,
	}
	return formatJobSeeker
}