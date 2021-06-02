package handler

import (
	"excho-job/auth"
	"excho-job/helper"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

func Middleware(authService auth.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")

		if authHeader == "" || len(authHeader) == 0 {
			responseErr := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "unauthorize user"})

			c.AbortWithStatusJSON(401, responseErr)
			return
		}

		token, err := authService.ValidateToken(authHeader)

		if err != nil {
			responseErr := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": err.Error()})

			c.AbortWithStatusJSON(401, responseErr)
			return
		}

		claim, ok := token.Claims.(jwt.MapClaims)

		if !ok {
			responseErr := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "unauthorize user"})

			c.AbortWithStatusJSON(401, responseErr)
			return
		}

		ID := int(claim["ID"].(float64))

		c.Set("currentUser", ID)
	}
}
