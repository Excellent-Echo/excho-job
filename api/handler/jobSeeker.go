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

// function for show all job seeker data
func (h *jobSeekerHandler) ShowAllJobSeekerHandler(c *gin.Context) {
	jobSeekers, err := h.jobSeekerService.GetAllJobSeeker()

	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success get all users job seeker", 200, "success", jobSeekers)
	c.JSON(200, response)
}

// function for show job seeker data by id
func (h *jobSeekerHandler) ShowJobSeekerByIDHandler(c *gin.Context) {
	id := c.Param("id")

	jobSeeker, err := h.jobSeekerService.GetJobSeekerByID(id)
	if err != nil {
		responseErr := helper.APIResponse("error bad request", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseErr)
		return
	}
	response := helper.APIResponse("success get user job seeker by ID", 200, "success", jobSeeker)
	c.JSON(200, response)
}

// function for create new job seeker
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
	response := helper.APIResponse("success create new user job Seeker", 201, "success", newJobSeeker)
	c.JSON(201, response)
}

// function for login job seeker and getting the token
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
		responseErr := helper.APIResponse("input data error", 401, "error", gin.H{"errors": err.Error()})

		c.JSON(401, responseErr)
		return
	}

	// generate token
	token, err := h.authService.GenerateToken(jobSeekerData.ID)

	if err != nil {
		responseErr := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err})

		c.JSON(401, responseErr)
		return
	}

	response := helper.APIResponse("success login user job seeker", 200, "success", gin.H{"token": token})
	c.JSON(200, response)
}

// fucntion for update job seeker data by id
func (h *jobSeekerHandler) UpdateJobSeekerByIDHandler(c *gin.Context) {
	id := c.Param("id")

	var updateJobSeekerInput entity.UpdateJobSeekerInput

	if err := c.ShouldBindJSON(&updateJobSeekerInput); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse("input data required", 400, "bad request", gin.H{"error": splitErr})

		c.JSON(400, responseErr)
		return
	}

	jobSeeker, err := h.jobSeekerService.UpdateJobSeekerByID(id, updateJobSeekerInput)

	if err != nil {
		responseErr := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse("success update job seeker by id", 200, "success", jobSeeker)
	c.JSON(200, response)
}

// function for delete JobSeeker by id
func (h *jobSeekerHandler) DeleteJobSeekerByIDHandler(c *gin.Context) {
	id := c.Param("id")

	jobSeeker, err := h.jobSeekerService.DeleteByJobSeekerID(id)

	if err != nil {
		responseErr := helper.APIResponse("Internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse("success delete user job seeker by ID", 200, "success", jobSeeker)
	c.JSON(200, response)
}
