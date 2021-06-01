package routes

import (
	"excho-job/handler"
	"excho-job/hire"

	"github.com/gin-gonic/gin"
)

var (
	hireRepository = hire.NewRepository(DB)
	hireService    = hire.NewService(hireRepository)
	hireHandler    = handler.NewHireHandler(hireService, authService)
)

func HireRoute(r *gin.Engine) {
	r.POST("/users/hire/register", hireHandler.CreateHireHandler)
	r.POST("/users/hire/login", hireHandler.LoginHireHandler)
}
