package handler

import (
	"excho-job/entity"
	"excho-job/helper"
	"excho-job/jobs"
	"strconv"

	"github.com/gin-gonic/gin"
)

type jobsHandler struct{
	jobsService jobs.Service
}

func NewJobsHandler(service jobs.Service) *jobsHandler{
	return &jobsHandler{service}
}

func(h *jobsHandler) ShowAllJobsHandler(c *gin.Context) {
	jobs, err := h.jobsService.GetAllJobs()

	if err != nil {
		responseErr := helper.APIResponse("internal server error", 500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse("success get all jobs data", 200, "status ok", jobs)

	c.JSON(200, response)
}

func(h *jobsHandler) CreateJobHandler(c *gin.Context) {
	hireData := int(c.MustGet("currentUser").(int))

	if hireData == 0 {
		responseErr := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "user not authorize / not login"})

		c.JSON(401, responseErr)
		return
	}

	hireID := strconv.Itoa(hireData)

	var inputJob entity.JobInput

	if err := c.ShouldBindJSON(&inputJob); err != nil{
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors":splitErr})
		c.JSON(400, responseErr)
		return
	}

	newJob, err := h.jobsService.SaveNewJob(inputJob, hireID)

	if err != nil {
		responseErr := helper.APIResponse("internal server error", 500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse("success create new jobSeeker", 201, "created", newJob)
	c.JSON(201, response)
}