package routes

import (
	"excho-job/handler"
	"excho-job/jobs"

	"github.com/gin-gonic/gin"
)

var (
	jobsRepository = jobs.NewRepository(DB)
	jobsService = jobs.NewService(jobsRepository)
	jobsHandler = handler.NewJobsHandler(jobsService)
)

func JobsRoute(r *gin.Engine) {
	r.GET("/jobs", jobsHandler.ShowAllJobsHandler)
	r.POST("/jobs", handler.Middleware(hireService, authService), jobsHandler.CreateJobHandler)
}