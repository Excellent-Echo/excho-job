package handler

import (
	applyjobs "excho-job/applyJobs"
	"excho-job/entity"
	"excho-job/helper"
	"strconv"

	"github.com/gin-gonic/gin"
)

type applyJobsHandler struct {
	applyJobsService applyjobs.Service
}

func NewApplyJobsHandler(applyJobsService applyjobs.Service) *applyJobsHandler {
	return &applyJobsHandler{applyJobsService}
}

func (h *applyJobsHandler) ShowAllApplyJobsHandler(c *gin.Context) {
	applyJobs, err := h.applyJobsService.GetAllApplyJob()

	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success get all apply job", 200, "success", applyJobs)
	c.JSON(200, response)
}

func (h *applyJobsHandler) CreateApplyJobsHandler(c *gin.Context) {
	jobID := c.Param("jobID")

	JobSeekerData := int(c.MustGet("currentUser").(int))

	if JobSeekerData == 0 {
		responseErr := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "user not authorize / not login"})

		c.JSON(401, responseErr)
		return
	}

	JobSeekerID := strconv.Itoa(JobSeekerData)

	var inputApply entity.ApplyJobs

	if err := c.ShouldBindJSON(&inputApply); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitErr})
		c.JSON(400, responseErr)
		return
	}

	newJob, err := h.applyJobsService.SaveNewApplyJobs(inputApply, jobID, JobSeekerID)

	if err != nil {
		responseErr := helper.APIResponse("internal server error", 500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse("success create Apply Job", 201, "created", newJob)
	c.JSON(201, response)
}

func (h *applyJobsHandler) ShowApplyJobsByJobSeekerIDHandler(c *gin.Context) {
	jobSeekerdata := int(c.MustGet("currentUser").(int))

	JobSeekerID := strconv.Itoa(jobSeekerdata)

	applyJobs, err := h.applyJobsService.GetApplyJobByJobSeekerID(JobSeekerID)

	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success get apply job by job seeker id", 200, "success", applyJobs)
	c.JSON(200, response)
}
