package server

import (
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func (s *Server) router() http.Handler {
	router := mux.NewRouter()
	router.Use(s.logger.RequestLogger)

	// Configuración de rutas
	router.HandleFunc("/people", s.HandlePeople).Methods(http.MethodGet, http.MethodPost, http.MethodOptions)
	router.HandleFunc("/people/{id}", s.HandlePeopleWithId).Methods(http.MethodGet, http.MethodPut, http.MethodDelete, http.MethodOptions)
	router.HandleFunc("/kills", s.HandleKills).Methods(http.MethodGet, http.MethodOptions)
	router.HandleFunc("/kills/{id}", s.HandleKillsWithId).Methods(http.MethodPost, http.MethodOptions)

	// Configuración CORS CORRECTA
	cors := handlers.CORS(
		handlers.AllowedOrigins([]string{
			"http://localhost:5173", // Frontend Vite
			"http://127.0.0.1:5173", // Alternativa
		}),
		handlers.AllowedMethods([]string{
			"GET", "POST", "PUT", "DELETE", "OPTIONS",
		}),
		handlers.AllowedHeaders([]string{
			"Content-Type", "Authorization", "Accept",
		}),
		handlers.AllowCredentials(),
	)

	return cors(router)
}
