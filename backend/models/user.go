package models

import (
	"fmt"
	"net/http"
)

type User struct {
	UserPkey int    `json:"id"`
	Login    string `json:"login"`
	Password string `json:"password"`
}

type UserList struct {
	Users []User `json:"users"`
}

func (i *User) Bind(r *http.Request) error {
	if i.Login == "" {
		return fmt.Errorf("login is a required field")
	}
	return nil
}

func (*UserList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func (*User) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}
