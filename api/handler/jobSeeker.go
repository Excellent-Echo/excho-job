package handler

import (
	"excho-job/auth"
	"excho-job/entity"
	"excho-job/helper"
	"excho-job/jobSeeker"

	"github.com/gin-gonic/gin"
)

type jobSeekerHandler struct {
	jobSeekerService jobSeeker.Service
	authService      auth.Service
}

func NewJobSeekerHandler(service jobSeeker.Service, authService auth.Service) *jobSeekerHandler {
	return &jobSeekerHandler{service, authService}
}

func (h *jobSeekerHandler) CreateJobSeekerHandler(c *gin.Context) {
	var inputJobSeeker entity.JobSeekerInput

	if err := c.ShouldBindJSON(&inputJobSeeker); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitErr})
		c.JSON(400, responseErr)
		return
	}

	newJobSeeker, err := h.jobSeekerService.SaveNewJobSeeker(inputJobSeeker)
	if err != nil {
		responseErr := helper.APIResponse("internal server error", 500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse("success create new jobSeeker", 201, "created", newJobSeeker)
	c.JSON(201, response)
}

func (h *jobSeekerHandler) LoginJobSeekerHandler(c *gin.Context) {
	var inputLogin entity.InputLoginJobSeeker

	if err := c.ShouldBindJSON(&inputLogin); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitErr})

		c.JSON(400, responseErr)
		return
	}

	jobSeekerData, err := h.jobSeekerService.LoginJobSeeker(inputLogin)

	if err != nil {
		responseErr := helper.APIResponse("input data error", 401, "bad request", gin.H{"errors": err.Error()})

		c.JSON(401, responseErr)
		return
	}

	token, err := h.authService.GenerateToken(jobSeekerData.ID)

	if err != nil {
		responseErr := helper.APIResponse("input data error", 401, "bad request", gin.H{"error": err})

		c.JSON(401, responseErr)
		return
	}

	response := helper.APIResponse("success login!", 200, "success", gin.H{"token": token})
	c.JSON(200, response)
}
