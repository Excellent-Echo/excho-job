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
	r.GET("job-seeker-profile", handler.Middleware(authService), jobSeekerProfileHandler.GetProfileByJobSeekerIDHandler)
	r.POST("job-seeker-profile", handler.Middleware(authService), jobSeekerProfileHandler.SaveNewProfileHandler)
	r.PUT("job-seeker-profile", handler.Middleware(authService), jobSeekerProfileHandler.UpdateProfileByIDHandler)
}
