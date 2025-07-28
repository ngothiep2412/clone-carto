package app

import (
	"clone-carto/internal/handlers/http"

	"go.uber.org/zap"
)

type Carto interface {
	Start() error
}

type carto struct {
	httpServer http.Server
	logger     *zap.Logger
}

func NewCarto(
	httpServer http.Server,
	logger *zap.Logger,
) Carto {
	return &carto{
		httpServer: httpServer,
		logger:     logger,
	}
}

func (c carto) Start() error {
	return c.httpServer.Start()
}
