package jobs

import "excho-job/entity"

type JobsFormat struct{
	ID int `json:"id"`
	CompanyName string `json:"company_name"`
	Address string `json:"address"`
	Industry string `json:"industry"`
	JobTittle string `json:"job_tittle"`
	Salary int `json:"salary"`
	Type string `json:"type"`
	JobDescription string `json:"job_description"`
	Requirements string `json:"requirements"`
	Skills string `json:"skills"`
}

func FormatJob(job entity.Job) JobsFormat{
	var formatJob = JobsFormat{
		ID: job.ID,
		CompanyName: job.CompanyName,
		Address: job.Address,
		Industry: job.Industry,
		JobTittle: job.JobTittle,
		Salary: job.Salary,
		Type: job.Type,
		JobDescription: job.JobDescription,
		Requirements: job.Requirements,
		Skills: job.Skills,
	}
	return formatJob
}