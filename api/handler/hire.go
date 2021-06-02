package handler

import (
	"excho-job/auth"
	"excho-job/entity"
	"excho-job/helper"
	"excho-job/hire"

	"github.com/gin-gonic/gin"
)

type hireHandler struct {
	hireService hire.Service
	authService auth.Service
}

func NewHireHandler(hireService hire.Service, authService auth.Service) *hireHandler {
	return &hireHandler{hireService, authService}
}

func (h *hireHandler) ShowAllHireHandler(c *gin.Context) {
	hires, err := h.hireService.GetAllHire()

	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success get all users hire", 200, "success", hires)
	c.JSON(200, response)
}

func (h *hireHandler) CreateHireHandler(c *gin.Context) {
	var inputHire entity.HireInput

	if err := c.ShouldBindJSON(&inputHire); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitErr})
		c.JSON(400, responseErr)
		return
	}

	newHire, err := h.hireService.SaveNewHire(inputHire)
	if err != nil {
		responseErr := helper.APIResponse("internal server error", 500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse("success create new jobSeeker", 201, "created", newHire)
	c.JSON(201, response)
}

func (h *hireHandler) LoginHireHandler(c *gin.Context) {
	var inputLogin entity.InputLoginHire

	if err := c.ShouldBindJSON(&inputLogin); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitErr})

		c.JSON(400, responseErr)
		return
	}

	jobSeekerData, err := h.hireService.LoginHire(inputLogin)

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

	response := helper.APIResponse("success login user hire", 200, "success", gin.H{"token": token})
	c.JSON(200, response)
}

func (h *hireHandler) UpdateHireByIDHandler(c *gin.Context) {
	id := c.Param("id")

	var updateHireInput entity.UpdateHireInput

	if err := c.ShouldBindJSON(&updateHireInput); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse("input data required", 400, "bad request", gin.H{"error": splitErr})

		c.JSON(400, responseErr)
		return
	}

	hire, err := h.hireService.UpdateHireByID(id, updateHireInput)

	if err != nil {
		responseErr := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse("success update job seeker by id", 200, "success", hire)
	c.JSON(200, response)
}

func (h *hireHandler) DeleteHireByIDHandler(c *gin.Context) {
	id := c.Param("id")

	hire, err := h.hireService.DeleteHireID(id)

	if err != nil {
		responseErr := helper.APIResponse("Internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse("success delete user hire by ID", 200, "success", hire)
	c.JSON(200, response)
}
