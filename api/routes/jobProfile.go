package routes

import (
	"excho-job/handler"
	jobprofile "excho-job/jobProfile"

	"github.com/gin-gonic/gin"
)

var (
	jobProfileRepository = jobprofile.NewRepository(DB)
	jobProfileService    = jobprofile.NewService(jobProfileRepository)
	jobProfileHandler    = handler.NewJobProfileHandler(jobProfileService)
)

func JobProfileRoute(r *gin.Engine) {
	r.GET("/jobs/profile", handler.Middleware(hireService, authService), jobProfileHandler.GetJobProfileByJobIDHandler)
	r.POST("/jobs/profile", handler.Middleware(hireService, authService), jobProfileHandler.SaveNewJobProfileHandler)
	r.PUT("/jobs/profile", handler.Middleware(hireService, authService), jobProfileHandler.UpdateJobProfileByIDHandler)
}
