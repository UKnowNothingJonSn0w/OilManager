package handler

import (
	"context"
	"fmt"
	"net/http"
	"strconv"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
)

var userIDKey = "userID"

func users(router chi.Router) {
	// router.Use(UserContext)
	router.Get("/", getAllUsers)
	// router.Post("/", createCase)

	// router.Route("/{caseID}", func(router chi.Router) {
	// 	router.Use(CaseContext)
	// 	router.Get("/", getCase)
	// router.Put("/", updateItem)
	// router.Delete("/", deleteItem)
	// })
}

func UserContext(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		userId := chi.URLParam(r, "userID")
		if userId == "" {
			render.Render(w, r, ErrorRenderer(fmt.Errorf("user ID is required")))
			return
		}
		id, err := strconv.Atoi(userId)
		if err != nil {
			render.Render(w, r, ErrorRenderer(fmt.Errorf("invalid user ID")))
		}
		ctx := context.WithValue(r.Context(), userIDKey, id)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func getAllUsers(w http.ResponseWriter, r *http.Request) {
	users, err := dbInstance.GetAllUsers()
	if err != nil {
		render.Render(w, r, ServerErrorRenderer(err))
		return
	}
	if err := render.Render(w, r, users); err != nil {
		render.Render(w, r, ErrorRenderer(err))
	}
}

// func createCase(w http.ResponseWriter, r *http.Request) {
// 	ccase := &models.User{}
// 	if err := render.Bind(r, ccase); err != nil {
// 		render.Render(w, r, ErrBadRequest)
// 		return
// 	}
// 	if err := dbInstance.AddCase(ccase); err != nil {
// 		render.Render(w, r, ErrorRenderer(err))
// 		return
// 	}
// 	if err := render.Render(w, r, ccase); err != nil {
// 		render.Render(w, r, ServerErrorRenderer(err))
// 		return
// 	}
// }

// func getCase(w http.ResponseWriter, r *http.Request) {
// 	caseID := r.Context().Value(caseIDKey).(int)
// 	ccase, err := dbInstance.GetCaseById(caseID)
// 	if err != nil {
// 		if err == db.ErrNoMatch {
// 			render.Render(w, r, ErrNotFound)
// 		} else {
// 			render.Render(w, r, ErrorRenderer(err))
// 		}
// 		return
// 	}
// 	if err := render.Render(w, r, &ccase); err != nil {
// 		render.Render(w, r, ServerErrorRenderer(err))
// 		return
// 	}
// }

// func deleteItem(w http.ResponseWriter, r *http.Request) {
// 	itemId := r.Context().Value(itemIDKey).(int)
// 	err := dbInstance.DeleteItem(itemId)
// 	if err != nil {
// 		if err == db.ErrNoMatch {
// 			render.Render(w, r, ErrNotFound)
// 		} else {
// 			render.Render(w, r, ServerErrorRenderer(err))
// 		}
// 		return
// 	}
// }

// func updateItem(w http.ResponseWriter, r *http.Request) {
// 	itemId := r.Context().Value(itemIDKey).(int)
// 	itemData := models.Item{}
// 	if err := render.Bind(r, &itemData); err != nil {
// 		render.Render(w, r, ErrBadRequest)
// 		return
// 	}
// 	item, err := dbInstance.UpdateItem(itemId, itemData)
// 	if err != nil {
// 		if err == db.ErrNoMatch {
// 			render.Render(w, r, ErrNotFound)
// 		} else {
// 			render.Render(w, r, ServerErrorRenderer(err))
// 		}
// 		return
// 	}
// 	if err := render.Render(w, r, &item); err != nil {
// 		render.Render(w, r, ServerErrorRenderer(err))
// 		return
// 	}
// }
