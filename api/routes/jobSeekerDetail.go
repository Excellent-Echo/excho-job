package routes

import (
	"excho-job/handler"
	jobseekerdetails "excho-job/jobSeekerDetails"

	"github.com/gin-gonic/gin"
)

var (
	detailsRepository = jobseekerdetails.NewRepository(DB)
	detailsService = jobseekerdetails.NewService(detailsRepository)
	detailsHandler = handler.NewJobSeekerDetailsHandler(detailsService, authService)
)

func JobSeekerDetailsRoute(r *gin.Engine) {
	r.GET("/users/job-seeker/details", handler.Middleware(hireService, authService), detailsHandler.GetJobSeekerDetailByUserIDHandler)
	r.POST("/users/job-seeker/details", handler.Middleware(hireService, authService), detailsHandler.SaveNewDetailHandler)
}