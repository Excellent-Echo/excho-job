package config

import (
	"excho-job/migration"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func Connection() *gorm.DB {
	dsn := "root:@tcp(localhost)/excho_job"
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