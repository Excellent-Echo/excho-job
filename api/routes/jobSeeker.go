package routes

import (
	"excho-job/auth"
	"excho-job/config"
	"excho-job/handler"
	"excho-job/jobSeeker"

	"github.com/gin-gonic/gin"
)

var (
	DB                  = config.Connection()
	jobSeekerRepository = jobSeeker.NewRepository(DB)
	jobSeekerService    = jobSeeker.NewService(jobSeekerRepository)
	authService         = auth.NewService()
	jobSeekerHandler    = handler.NewJobSeekerHandler(jobSeekerService, authService)
)

func JobSeekerRoute(r *gin.Engine) {
	r.POST("/users/job-seeker/register", jobSeekerHandler.CreateJobSeekerHandler)
	r.POST("/users/job-seeker/login", jobSeekerHandler.LoginJobSeekerHandler)
}
