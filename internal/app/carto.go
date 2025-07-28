package app

import (
	"clone-carto/internal/dataaccess/db"
	"clone-carto/internal/handlers/http"
	"context"

	"go.uber.org/zap"
)

type Carto interface {
	Start() error
}

type carto struct {
	dbMigrator db.Migrator
	httpServer http.Server
	logger     *zap.Logger
}

func NewCarto(
	dbMigrator db.Migrator,
	httpServer http.Server,
	logger *zap.Logger,
) Carto {
	return &carto{
		dbMigrator: dbMigrator,
		httpServer: httpServer,
		logger:     logger,
	}
}

func (c carto) Start() error {
	if err := c.dbMigrator.Migrate(context.Background()); err != nil {
		return err
	}
	return c.httpServer.Start()
}
