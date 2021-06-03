package main

import (
	"excho-job/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// CORS disable
	r.Use(cors.Default())

	routes.JobSeekerRoute(r)
	routes.HireRoute(r)
	routes.JobsRoute(r)
	routes.JobSeekerDetailsRoute(r)
	routes.ResumeRoute(r)
	routes.JobProfileRoute(r)
	routes.JobSeekerProfileRoute(r)
	routes.ApplyJobsRoute(r)

	r.Run(":5555")
}
