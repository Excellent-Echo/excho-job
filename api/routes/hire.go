package routes

import (
	"excho-job/handler"
	"excho-job/hire"

	"github.com/gin-gonic/gin"
)

var (
	hireRepository = hire.NewRepository(DB)
	hireService    = hire.NewService(hireRepository, jobsRepository)
	hireHandler    = handler.NewHireHandler(hireService, authService)
)

func HireRoute(r *gin.Engine) {
	r.GET("/users/hire", handler.Middleware(authService), hireHandler.ShowAllHireHandler)
	r.GET("/users/hire/:id", handler.Middleware(authService), hireHandler.ShowHireByID)
	r.POST("/users/hire/register", hireHandler.CreateHireHandler)
	r.POST("/users/hire/login", hireHandler.LoginHireHandler)
	r.PUT("/users/hire/:id", handler.Middleware(authService), hireHandler.UpdateHireByIDHandler)
	r.DELETE("/users/hire/:id", handler.Middleware(authService), hireHandler.DeleteHireByIDHandler)
}
