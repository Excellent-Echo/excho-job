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
	r.GET("/users/job-seeker", handler.Middleware(authService), jobSeekerHandler.ShowAllJobSeekerHandler)
	r.GET("/users/job-seeker/:id", handler.Middleware(authService), jobSeekerHandler.ShowJobSeekerByIDHandler)
	r.POST("/users/job-seeker/register", jobSeekerHandler.CreateJobSeekerHandler)
	r.POST("/users/job-seeker/login", jobSeekerHandler.LoginJobSeekerHandler)
	r.PUT("/users/job-seeker/:id", handler.Middleware(authService), jobSeekerHandler.UpdateJobSeekerByIDHandler)
	r.DELETE("/users/job-seeker/:id", handler.Middleware(authService), jobSeekerHandler.DeleteJobSeekerByIDHandler)
}
