package http

import (
	"clone-carto/internal/handlers/http/rpc"
	"clone-carto/internal/handlers/http/rpc/rpcserver"
	"context"
)

type apiServerHandler struct {
}

func NewAPIServerHandler() rpcserver.APIServer {
	return &apiServerHandler{}
}

func (apiServerHandler) Echo(ctx context.Context, in *rpc.EchoRequest) (*rpc.EchoResponse, error) {
	return &rpc.EchoResponse{
		Message: in.Message,
	}, nil
}
