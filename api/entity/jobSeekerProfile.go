package entity

type JobSeekerProfile struct{
	ID int `json:"id"`
	Profile string `json:"profile"`
	JobSeekerID int `json:"job_seeker_id"`
}