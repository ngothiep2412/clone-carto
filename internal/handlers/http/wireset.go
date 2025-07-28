package http

import (
	"clone-carto/internal/handlers/http/middlewares"

	"github.com/google/wire"
	"gitlab.com/pjrpc/pjrpc/v2"
)

func InitializeMiddlewareList(
	authMiddleware middlewares.Auth,
) []pjrpc.Middleware {
	return []pjrpc.Middleware{
		pjrpc.Middleware(authMiddleware),
	}
}

var WireSet = wire.NewSet(
	middlewares.WireSet,
	InitializeMiddlewareList,
	NewAPIServerHandler,
	NewSPAHandler,
	NewServer,
)
