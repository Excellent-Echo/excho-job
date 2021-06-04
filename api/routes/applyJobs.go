package routes

import (
	applyjobs "excho-job/applyJobs"
	"excho-job/handler"

	"github.com/gin-gonic/gin"
)

var (
	applyJobsRepository = applyjobs.NewRepository(DB)
	applyJobsService    = applyjobs.NewService(applyJobsRepository)
	applyJobsHandler    = handler.NewApplyJobsHandler(applyJobsService)
)

func ApplyJobsRoute(r *gin.Engine) {
	r.GET("/apply-jobs", applyJobsHandler.ShowAllApplyJobsHandler)
	r.GET("/apply", handler.Middleware(authService), applyJobsHandler.ShowApplyJobsByJobSeekerIDHandler)
	r.POST("/apply-jobs/:jobID", handler.Middleware(authService), applyJobsHandler.CreateApplyJobsHandler)
}
