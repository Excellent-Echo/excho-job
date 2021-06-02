package routes

import (
	"excho-job/handler"
	jobseekerprofile "excho-job/jobSeekerProfile"

	"github.com/gin-gonic/gin"
)

var (
	jobSeekerProfileRepository = jobseekerprofile.NewRepository(DB)
	jobSeekerProfileService    = jobseekerprofile.NewService(jobSeekerProfileRepository)
	jobSeekerProfileHandler    = handler.NewJobSeekerProfileHandler(jobSeekerProfileService)
)

func JobSeekerProfileRoute(r *gin.Engine) {
	r.GET("/users/job-seeker/profile", handler.Middleware(authService), jobSeekerProfileHandler.GetProfileByJobSeekerIDHandler)
	r.POST("/users/job-seeker/profile", handler.Middleware(authService), jobSeekerProfileHandler.SaveNewProfileHandler)
	r.PUT("/users/job-seeker/profile", handler.Middleware(authService), jobSeekerProfileHandler.UpdateProfileByIDHandler)
}
