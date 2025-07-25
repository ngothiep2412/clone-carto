package http

import (
	"clone-carto/internal/handlers/http/rpc/rpcserver"
	"log"
	"net/http"

	"gitlab.com/pjrpc/pjrpc/v2"
)

type Server interface {
	Start() error
}

type server struct {
	apiServerHandler rpcserver.APIServer // for RPC
	spaHandler       http.Handler        // for frontend SPA
}

func NewServer(
	apiServerHandler rpcserver.APIServer,
	spaHandler http.Handler,
) Server {
	return &server{
		apiServerHandler: apiServerHandler,
		spaHandler:       spaHandler,
	}
}

func (s server) Start() error {
	srv := pjrpc.NewServerHTTP()
	srv.SetLogger(log.Writer())

	rpcserver.RegisterAPIServer(srv, s.apiServerHandler)

	mux := http.NewServeMux()

	mux.Handle("/api", srv)

	mux.Handle("/", s.spaHandler)

	log.Println("Starting server at :8080")

	return http.ListenAndServe(":8080", mux)
}
