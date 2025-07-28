package configs

import "time"

type Token struct {
	PrivateKey string
	PublicKey  string
	ExpireIn   string
}

func (t Token) GetExpiresInDuration() (time.Duration, error) {
	return time.ParseDuration(t.ExpireIn)
}
