package routes

import (
	"excho-job/handler"
	"excho-job/resume"

	"github.com/gin-gonic/gin"
)

var (
	resumeRepository = resume.NewRepository(DB)
	resumeService = resume.NewService(resumeRepository)
	resumeHandler = handler.NewResumeHandler(resumeService)
)

func ResumeRoute(r *gin.Engine) {
	r.GET("/users/job-seeker/resume", handler.Middleware(authService), resumeHandler.GetResemuByJobSeekerIDHandler)
	r.POST("/users/job-seeker/resume", handler.Middleware(authService), resumeHandler.SaveNewResumeeHandler)
	r.PUT("/users/job-seeker/resume", handler.Middleware(authService), resumeHandler.UpdateResumeByIDHandler)
}
