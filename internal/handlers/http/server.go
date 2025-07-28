package http

import (
	"clone-carto/internal/configs"
	"clone-carto/internal/handlers/http/rpc/rpcserver"
	"log"
	"net/http"

	"gitlab.com/pjrpc/pjrpc/v2"
	"go.uber.org/zap"
)

type Server interface {
	Start() error
}

type server struct {
	apiServerHandler    rpcserver.APIServer // for RPC
	spaHandler          http.Handler        // for frontend SPA
	pjrpcmiddlewareList []pjrpc.Middleware
	httpMiddlewareList  []func(http.Handler) http.Handler
	logger              *zap.Logger
	httpConfig          configs.HTTP
}

func NewServer(
	apiServerHandler rpcserver.APIServer,
	spaHandler http.Handler,
	pjrpcmiddlewareList []pjrpc.Middleware,
	httpMiddlewareList []func(http.Handler) http.Handler,
	logger *zap.Logger,
	httpConfig configs.HTTP,
) Server {
	return &server{
		apiServerHandler:    apiServerHandler,
		spaHandler:          spaHandler,
		pjrpcmiddlewareList: pjrpcmiddlewareList,
		httpMiddlewareList:  httpMiddlewareList,
		logger:              logger,
		httpConfig:          httpConfig,
	}
}

func (s server) Start() error {
	srv := pjrpc.NewServerHTTP()
	srv.SetLogger(log.Writer())

	rpcserver.RegisterAPIServer(srv, s.apiServerHandler, s.pjrpcmiddlewareList...)

	var apiHandler http.Handler = srv
	for i := range s.httpMiddlewareList {
		apiHandler = s.httpMiddlewareList[i](apiHandler)
	}

	mux := http.NewServeMux()

	mux.Handle("/api", apiHandler)
	mux.Handle("/", s.spaHandler)

	s.logger.
		With(zap.String("address", s.httpConfig.Address)).
		Info("starting http server")
	return http.ListenAndServe(s.httpConfig.Address, mux)
}
