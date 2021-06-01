package handler

import (
	"excho-job/helper"
	"excho-job/resume"
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
)

type resumeHandler struct {
	service resume.Service
}

func NewResumeHandler(service resume.Service) *resumeHandler {
	return &resumeHandler{service}
}

func (h *resumeHandler) GetResemuByJobSeekerIDHandler(c *gin.Context) {
	userData := int(c.MustGet("currentUser").(int))

	userID := strconv.Itoa(userData)

	userProfile, err := h.service.GetResemuByJobSeekerID(userID)

	if userProfile.ID == 0 {
		response := "resume can't found / resume not uploaded yet"
		responseErr := helper.APIResponse("status unauthorize", 401, "error", gin.H{"error": response})

		c.JSON(401, responseErr)
		return
	}

	if err != nil {
		responseError := helper.APIResponse("status unauthorize", 401, "error", gin.H{"error": err.Error()})

		c.JSON(401, responseError)
		return
	}

	response := helper.APIResponse("success get resume by joob seeker ID", 200, "success", userProfile)
	c.JSON(200, response)
}

func (h *resumeHandler) SaveNewResumeeHandler(c *gin.Context) {

	userData := int(c.MustGet("currentUser").(int))

	file, err := c.FormFile("resume") // postman

	if err != nil {
		responseError := helper.APIResponse("status bad request", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	path := fmt.Sprintf("images/job-seeker-detail/resume/resume-%d-%s", userData, file.Filename)

	err = c.SaveUploadedFile(file, path)

	if err != nil {
		// log.Println("error line 63")
		responseError := helper.APIResponse("status bad request", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	pathResumeSave := "localhost/" + path

	userProfile, err := h.service.SaveNewResume(pathResumeSave, userData)

	if err != nil {
		responseError := helper.APIResponse("Internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success create user profile", 201, "success", userProfile)
	c.JSON(201, response)
}

func (h *resumeHandler) UpdateResumeByIDHandler(c *gin.Context) {

	userData := int(c.MustGet("currentUser").(int))

	ID := strconv.Itoa(userData)

	file, err := c.FormFile("resume") // postman

	if err != nil {
		responseError := helper.APIResponse("status bad request", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	path := fmt.Sprintf("images/job-seeker-detail/resume/resume-%d-%s", userData, file.Filename)

	err = c.SaveUploadedFile(file, path)

	if err != nil {
		// log.Println("error line 63")
		responseError := helper.APIResponse("status bad request", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	pathProfileSave := "localhost/" + path

	userProfile, err := h.service.UpdateResumeByID(pathProfileSave, ID)

	if err != nil {
		responseError := helper.APIResponse("Internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success update resume job seeker", 200, "success", userProfile)
	c.JSON(200, response)
}
