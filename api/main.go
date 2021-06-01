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
	r.Run(":5555")
}
