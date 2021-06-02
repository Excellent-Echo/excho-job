package routes

import (
	"excho-job/handler"
	jobseekerdetails "excho-job/jobSeekerDetails"

	"github.com/gin-gonic/gin"
)

var (
	detailsRepository = jobseekerdetails.NewRepository(DB)
	detailsService    = jobseekerdetails.NewService(detailsRepository)
	detailsHandler    = handler.NewJobSeekerDetailsHandler(detailsService, authService)
)

func JobSeekerDetailsRoute(r *gin.Engine) {
	r.GET("/job-seeker-details", handler.Middleware(authService), detailsHandler.ShowJobSeekerDetailsHandler)
	r.POST("job-seeker-details", handler.Middleware(authService), detailsHandler.SaveNewDetailHandler)
	r.PUT("job-seeker-details", handler.Middleware(authService), detailsHandler.UpdateDetailsByJobSeekerIDHandler)
}
