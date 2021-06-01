package handler

import (
	"excho-job/helper"
	jobseekerprofile "excho-job/jobSeekerProfile"
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
)

type jobSeekerProfileHandler struct {
	service jobseekerprofile.Service
}

func NewJobSeekerProfileHandler(service jobseekerprofile.Service) *jobSeekerProfileHandler {
	return &jobSeekerProfileHandler{service}
}

func (h *jobSeekerProfileHandler) GetProfileByJobSeekerIDHandler(c *gin.Context) {
	userData := int(c.MustGet("currentUser").(int))

	userID := strconv.Itoa(userData)

	userProfile, err := h.service.GetProfileByJobSeekerID(userID)

	if err != nil {
		responseError := helper.APIResponse("status unauthorize", 401, "error", gin.H{"error": err.Error()})

		c.JSON(401, responseError)
		return
	}

	response := helper.APIResponse("success get job seeker profile by job seeker ID", 200, "success", userProfile)
	c.JSON(200, response)
}

func (h *jobSeekerProfileHandler) SaveNewProfileHandler(c *gin.Context) {

	userData := int(c.MustGet("currentUser").(int))

	file, err := c.FormFile("profile") // postman

	if err != nil {
		responseError := helper.APIResponse("status bad request", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	path := fmt.Sprintf("images/job-seeker-detail/profile/profile-%d-%s", userData, file.Filename)

	err = c.SaveUploadedFile(file, path)

	if err != nil {
		// log.Println("error line 63")
		responseError := helper.APIResponse("status bad request", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	pathJobSeekerProfile := "localhost/" + path

	userProfile, err := h.service.SaveNewProfile(pathJobSeekerProfile, userData)

	if err != nil {
		responseError := helper.APIResponse("Internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success create job seeker profile", 201, "success", userProfile)
	c.JSON(201, response)
}

func (h *jobSeekerProfileHandler) UpdateProfileByIDHandler(c *gin.Context) {

	userData := int(c.MustGet("currentUser").(int))

	ID := strconv.Itoa(userData)

	file, err := c.FormFile("profile") // postman

	if err != nil {
		responseError := helper.APIResponse("status bad request", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	path := fmt.Sprintf("images/job-seeker-detail/profile/profile-%d-%s", userData, file.Filename)

	err = c.SaveUploadedFile(file, path)

	if err != nil {
		// log.Println("error line 63")
		responseError := helper.APIResponse("status bad request", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	pathProfileSave := "localhost/" + path

	userProfile, err := h.service.UpdateProfileByID(pathProfileSave, ID)

	if err != nil {
		responseError := helper.APIResponse("Internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success update job seeker profile", 200, "success", userProfile)
	c.JSON(200, response)
}
