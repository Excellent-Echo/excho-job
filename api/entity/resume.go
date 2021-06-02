package entity

type Resume struct {
	ID          int    `json:"id"`
	Resume      string `json:"resume"`
	JobSeekerID int    `json:"job_seeker_id"`
}
