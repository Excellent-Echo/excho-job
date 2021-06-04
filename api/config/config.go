package config

import (
	"excho-job/migration"
	"fmt"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func Connection() *gorm.DB {

	dbUser := os.Getenv("DB_USERNAME")
	dbPass := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPass, dbHost, dbPort, dbName)

	// dsn := "root:@tcp(localhost)/excho_job"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err.Error())
	}

	db.AutoMigrate(&migration.JobSeeker{})
	db.AutoMigrate(&migration.JobSeekerDetails{})
	db.AutoMigrate(&migration.Hire{})
	db.AutoMigrate(&migration.Job{})
	db.AutoMigrate(&migration.Resume{})
	db.AutoMigrate(&migration.JobProfile{})
	db.AutoMigrate(&migration.JobSeekerProfile{})

	return db
}
