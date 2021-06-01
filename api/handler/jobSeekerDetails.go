package handler

import (
	"excho-job/auth"
	"excho-job/entity"
	"excho-job/helper"
	jobseekerdetails "excho-job/jobSeekerDetails"
	"strconv"

	"github.com/gin-gonic/gin"
)

type jobsSeekerDetailsHandler struct{
	jobsSeekerDetailsService jobseekerdetails.Service
	authService auth.Service
}

func NewJobSeekerDetailsHandler(service jobseekerdetails.Service, authService auth.Service) *jobsSeekerDetailsHandler{
	return &jobsSeekerDetailsHandler{service, authService}
}

// func(h *jobsSeekerDetailsHandler) ShowAllJobSeekerDetailsHandler(c *gin.Context) {
// 	jobSeekerDetails, err := h.jobsSeekerDetailsService.GetJobSeekerDetail()

// 	if err != nil {
// 		responseErr := helper.APIResponse("internal server error", 500, "internal server error", err.Error())
// 		c.JSON(500, responseErr)
// 		return
// 	}

// 	response := helper.APIResponse("success get data Job Seeker Detail", 200, "status ok", jobSeekerDetails)

// 	c.JSON(200, response)
// }

func (h *jobsSeekerDetailsHandler) SaveNewDetailHandler(c *gin.Context) {
	userData := int(c.MustGet("currentUser").(int))

	if userData == 0 {
		responseError := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "user not authorize / not login"})

		c.JSON(401, responseError)
		return
	}

	userID := strconv.Itoa(userData)

	var inputJobSeekerDetail entity.JobSeekerDetailInput

	if err := c.ShouldBindJSON(&inputJobSeekerDetail); err != nil{
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	NewJobSeekerDetail, err := h.jobsSeekerDetailsService.SaveNewDetail(inputJobSeekerDetail, userID)

	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success create new user Detail", 201, "success", NewJobSeekerDetail)
	c.JSON(201, response)
}

func (h *jobsSeekerDetailsHandler) GetJobSeekerDetailByUserIDHandler(c *gin.Context) {
	userData := int(c.MustGet("currentUser").(int))

	if userData == 0 {
		responseError := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "user not authorize / not login"})

		c.JSON(401, responseError)
		return
	}

	userID := strconv.Itoa(userData)

	jobSeekerDetail, err := h.jobsSeekerDetailsService.GetJobSeekerDetailByUserID(userID)

	if err != nil {
		responseError := helper.APIResponse("status unauthorize", 401, "error", gin.H{"error": err.Error()})

		c.JSON(401, responseError)
		return
	}

	response := helper.APIResponse("success get user detail by job seeker ID", 200, "success", jobSeekerDetail)
	c.JSON(200, response)
}