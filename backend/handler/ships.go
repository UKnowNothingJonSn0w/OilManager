package handler

import (
	"context"
	"fifczak/go_test_backend/models"
	"fmt"
	"net/http"
	"strconv"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
)

var shipIDKey = "shipID"

func ships(router chi.Router) {
	router.Get("/", getAllShips)
	router.Put("/", createShip)
}

func ShipContext(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		shipId := chi.URLParam(r, "shipID")
		if shipId == "" {
			render.Render(w, r, ErrorRenderer(fmt.Errorf("ship ID is required")))
			return
		}
		id, err := strconv.Atoi(shipId)
		if err != nil {
			render.Render(w, r, ErrorRenderer(fmt.Errorf("invalid ship ID")))
		}
		ctx := context.WithValue(r.Context(), shipIDKey, id)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func getAllShips(w http.ResponseWriter, r *http.Request) {
	// SECURITY
	c, err := r.Cookie("session_token")
	if err != nil {
		if err == http.ErrNoCookie {
			w.Write([]byte(err.Error()))
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		w.Write([]byte(err.Error()))
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	sessionToken := c.Value
	userSession, exists := sessions[sessionToken]
	if !exists {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	if userSession.isExpired() {
		delete(sessions, sessionToken)
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	// END SECURITY

	ships, err := dbInstance.GetAllShips()
	if err != nil {
		render.Render(w, r, ServerErrorRenderer(err))
		return
	}
	if err := render.Render(w, r, ships); err != nil {
		render.Render(w, r, ErrorRenderer(err))
	}

}

func createShip(w http.ResponseWriter, r *http.Request) {

	// SECURITY
	c, err := r.Cookie("session_token")
	if err != nil {
		if err == http.ErrNoCookie {
			w.Write([]byte(err.Error()))
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		w.Write([]byte(err.Error()))
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	sessionToken := c.Value
	userSession, exists := sessions[sessionToken]
	if !exists {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	if userSession.isExpired() {
		delete(sessions, sessionToken)
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	// END SECURITY

	ship := &models.Ship{}

	if err := render.Bind(r, ship); err != nil {
		fmt.Println(err)
		render.Render(w, r, ErrBadRequest)
		return
	}
	if err := dbInstance.AddShip(ship); err != nil {
		fmt.Println(err)
		render.Render(w, r, ErrorRenderer(err))
		return
	}

	if err := render.Render(w, r, ship); err != nil {
		fmt.Println(err)
		render.Render(w, r, ServerErrorRenderer(err))

		return
	}
}
