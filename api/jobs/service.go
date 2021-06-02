package jobs

import (
	"errors"
	"excho-job/entity"
	"excho-job/helper"
	"fmt"
	"strconv"
)

type Service interface {
	GetAllJobs() ([]JobsFormat, error)
	SaveNewJob(job entity.JobInput, hireID string) (JobsFormat, error)
	GetJobByID(ID string) (JobsFormat, error)
	GetJobByLocation(location string) (JobsFormat, error)
	GetJobByCategory(category string) (JobsFormat, error)
	GetJobByType(Type string) (JobsFormat, error)
	UpdateJobByID(id string, dataInput entity.JobInput) (JobsFormat, error)
	DeleteByJobsID(id string) (interface{}, error)
}

type service struct {
	repository Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetAllJobs() ([]JobsFormat, error) {
	jobs, err := s.repository.FindAll()

	var formatJobs []JobsFormat

	for _, job := range jobs {
		formatJob := FormatJob(job)
		formatJobs = append(formatJobs, formatJob)
	}

	if err != nil {
		return formatJobs, err
	}
	return formatJobs, nil
}

func (s *service) SaveNewJob(job entity.JobInput, hireID string) (JobsFormat, error) {

	IDHire, _ := strconv.Atoi(hireID)

	var newJob = entity.Job{
		CompanyName:    job.CompanyName,
		Address:        job.Address,
		Industry:       job.Industry,
		JobTittle:      job.JobTittle,
		Salary:         job.Salary,
		Type:           job.Type,
		JobDescription: job.JobDescription,
		Requirements:   job.Requirements,
		Skills:         job.Skills,
		Location:       job.Location,
		Category:       job.Category,
		HireID:         IDHire,
	}

	createJob, err := s.repository.Create(newJob)

	formatJob := FormatJob(createJob)
	if err != nil {
		return formatJob, err
	}
	return formatJob, nil
}

func (s *service) GetJobByID(ID string) (JobsFormat, error) {
	// validate input ID is not negative number
	if err := helper.ValidateIDNumber(ID); err != nil {
		return JobsFormat{}, err
	}

	job, err := s.repository.FindByID(ID)

	if err != nil {
		return JobsFormat{}, err
	}

	if job.ID == 0 {
		return JobsFormat{}, errors.New("job id not found")
	}
	formatJob := FormatJob(job)
	return formatJob, nil
}

func (s *service) GetJobByLocation(location string) (JobsFormat, error) {

	job, err := s.repository.FindByLocation(location)

	if err != nil {
		return JobsFormat{}, err
	}

	if job.Location == "" {
		return JobsFormat{}, errors.New("job location not found")
	}

	formatJob := FormatJob(job)
	return formatJob, nil
}

func (s *service) GetJobByCategory(category string) (JobsFormat, error) {

	job, err := s.repository.FindByCategory(category)

	if err != nil {
		return JobsFormat{}, err
	}

	if job.Category == "" {
		return JobsFormat{}, errors.New("job category not found")
	}

	formatJob := FormatJob(job)
	return formatJob, nil
}

func (s *service) GetJobByType(Type string) (JobsFormat, error) {

	job, err := s.repository.FindByType(Type)

	if err != nil {
		return JobsFormat{}, err
	}

	if job.Type == "" {
		return JobsFormat{}, errors.New("job type not found")
	}

	formatJob := FormatJob(job)
	return formatJob, nil
}

func (s *service) UpdateJobByID(id string, dataInput entity.JobInput) (JobsFormat, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(id); err != nil {
		return JobsFormat{}, err
	}

	job, err := s.repository.FindByID(id)

	if err != nil {
		return JobsFormat{}, err
	}

	if job.ID == 0 {
		return JobsFormat{}, errors.New("job id not found")
	}

	if dataInput.CompanyName != "" || len(dataInput.CompanyName) != 0 {
		dataUpdate["company_name"] = dataInput.CompanyName
	}
	if dataInput.Address != "" || len(dataInput.Address) != 0 {
		dataUpdate["address"] = dataInput.Address
	}
	if dataInput.Industry != "" || len(dataInput.Industry) != 0 {
		dataUpdate["industry"] = dataInput.Industry
	}
	if dataInput.JobTittle != "" || len(dataInput.JobTittle) != 0 {
		dataUpdate["job_tittle"] = dataInput.JobTittle
	}
	if strconv.Itoa(dataInput.Salary) != "" || len(strconv.Itoa(dataInput.Salary)) != 0 {
		dataUpdate["salary"] = dataInput.Salary
	}
	if dataInput.Type != "" || len(dataInput.Type) != 0 {
		dataUpdate["type"] = dataInput.Type
	}
	if dataInput.JobDescription != "" || len(dataInput.JobDescription) != 0 {
		dataUpdate["job_description"] = dataInput.JobDescription
	}
	if dataInput.Requirements != "" || len(dataInput.Requirements) != 0 {
		dataUpdate["requirements"] = dataInput.Requirements
	}
	if dataInput.Skills != "" || len(dataInput.Skills) != 0 {
		dataUpdate["skills"] = dataInput.Skills
	}
	if dataInput.Location != "" || len(dataInput.Location) != 0 {
		dataUpdate["location"] = dataInput.Location
	}
	if dataInput.Category != "" || len(dataInput.Category) != 0 {
		dataUpdate["category"] = dataInput.Category
	}

	jobUpdated, err := s.repository.UpdateByID(id, dataUpdate)

	if err != nil {
		return JobsFormat{}, err
	}

	formatJob := FormatJob(jobUpdated)

	return formatJob, nil
}

func (s *service) DeleteByJobsID(id string) (interface{}, error) {
	if err := helper.ValidateIDNumber(id); err != nil {
		return nil, err
	}

	job, err := s.repository.FindByID(id)

	if err != nil {
		return nil, err
	}
	if job.ID == 0 {
		return nil, errors.New("job id not found")
	}

	status, err := s.repository.DeleteByID(id)
	if err != nil {
		return nil, errors.New("error delete in internal server")
	}

	if status == "error" {
		return nil, errors.New("error delete in internal server")
	}

	msg := fmt.Sprintf("success delete user ID : %s", id)
	formatDelete := FormatDeleteUser(msg)

	return formatDelete, nil
}
