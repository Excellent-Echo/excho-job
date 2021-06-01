package handler

import (
	"excho-job/helper"
	jobprofile "excho-job/jobProfile"
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
)

type jobProfileHandler struct{
	service jobprofile.Service
}

func NewJobProfileHandler(service jobprofile.Service) *jobProfileHandler{
	return &jobProfileHandler{service}
}

func (h *jobProfileHandler) GetJobProfileByJobIDHandler(c *gin.Context){
	jobData := int(c.MustGet("currentUser").(int))

	jobID := strconv.Itoa(jobData)

	jobProfile, err := h.service.GetJobProfileByJobID(jobID)

	if jobProfile.ID == 0 {
		response := "jobs profile not created yet"
		responseError := helper.APIResponse("status unauthorize", 401, "error", gin.H{"error": response})

		c.JSON(401, responseError)
		return
	}

	if err != nil {
		responseError := helper.APIResponse("status unauthorize", 401, "error", gin.H{"error": err.Error()})

		c.JSON(401, responseError)
		return
	}

	response := helper.APIResponse("success get job profile by job ID", 200, "success", jobProfile)
	c.JSON(200, response)
}

func (h *jobProfileHandler) SaveNewJobProfileHandler(c *gin.Context) {

	jobData := int(c.MustGet("currentUser").(int))

	file, err := c.FormFile("profile") // postman

	if err != nil {
		responseError := helper.APIResponse("status bad request", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	path := fmt.Sprintf("images/job/profile/profile-%d-%s", jobData, file.Filename)

	err = c.SaveUploadedFile(file, path)

	if err != nil {
		// log.Println("error line 63")
		responseError := helper.APIResponse("status bad request", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	pathJobProfileSave := "localhost/" + path

	jobProfile, err := h.service.SaveNewJobProfile(pathJobProfileSave, jobData)

	if err != nil {
		responseError := helper.APIResponse("Internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success create job profile", 201, "success", jobProfile)
	c.JSON(201, response)
}

func (h *jobProfileHandler) UpdateJobProfileByIDHandler(c *gin.Context) {

	jobData := int(c.MustGet("currentUser").(int))

	ID := strconv.Itoa(jobData)

	file, err := c.FormFile("profile") // postman

	if err != nil {
		responseError := helper.APIResponse("status bad request", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	path := fmt.Sprintf("images/job/profile/profile-%d-%s", jobData, file.Filename)

	err = c.SaveUploadedFile(file, path)

	if err != nil {
		// log.Println("error line 63")
		responseError := helper.APIResponse("status bad request", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	pathProfileSave := "localhost/" + path

	jobProfile, err := h.service.UpdateJobProfileByID(pathProfileSave, ID)

	if err != nil {
		responseError := helper.APIResponse("Internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success update user profile", 200, "success", jobProfile)
	c.JSON(200, response)
}