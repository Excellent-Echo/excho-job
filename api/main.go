package main

import (
	"excho-job/routes"

	"github.com/gin-gonic/gin"
)



func main() {
	r := gin.Default()

	routes.JobSeekerRoute(r)
	routes.HireRoute(r)
	routes.JobsRoute(r)
	routes.JobSeekerDetailsRoute(r)
	routes.ResumeRoute(r)
	routes.JobProfileRoute(r)
	routes.JobSeekerProfileRoute(r)

	r.Run(":5555")
}