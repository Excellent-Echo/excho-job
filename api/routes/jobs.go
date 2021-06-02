package routes

import (
	"excho-job/handler"
	"excho-job/jobs"

	"github.com/gin-gonic/gin"
)

var (
	jobsRepository = jobs.NewRepository(DB)
	jobsService    = jobs.NewService(jobsRepository)
	jobsHandler    = handler.NewJobsHandler(jobsService)
)

func JobsRoute(r *gin.Engine) {
	r.GET("/jobs", jobsHandler.ShowAllJobsHandler)
	r.GET("/jobs/:id", jobsHandler.ShowJobByIDHandler)
	r.GET("jobs/location/:job-location", jobsHandler.ShowJobByLocationHandler)
	r.GET("/jobs/category/:category", jobsHandler.ShowJobByCategoryHandler)
	r.GET("/jobs/type/:type", jobsHandler.ShowJobByTypeHandler)
	r.POST("/jobs", handler.Middleware(authService), jobsHandler.CreateJobHandler)
	r.PUT("/jobs/edit/:id", jobsHandler.UpdateJobByIDHandler)
	r.DELETE("/jobs/delete/:id", jobsHandler.DeleteJobByIDHandler)
}
