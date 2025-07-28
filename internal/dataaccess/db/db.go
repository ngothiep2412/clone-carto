package db

import (
	"clone-carto/internal/configs"
	"errors"
	"fmt"
	"path/filepath"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func InitializeDB(
	databaseConfig configs.Database,

) (*gorm.DB, error) {
	databaseFilePath, err := filepath.Abs(databaseConfig.FilePath)

	if err != nil {
		return nil, errors.New("failed to get abs database file path")
	}

	return gorm.Open(
		sqlite.Open(fmt.Sprintf("file://%s", databaseFilePath)),
		&gorm.Config{},
	)
}
