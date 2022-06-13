package models

import (
	"database/sql"
	"fmt"
	"net/http"
)

type Ship struct {
	ShipPkey int            `json:"id"`
	Imo      string         `json:"imo"`
	Name     string         `json:"name"`
	Note     sql.NullString `json:"note"`
}

type ShipList struct {
	Ships []Ship `json:"ships"`
}

func (i *Ship) Bind(r *http.Request) error {
	if i.Imo == "" {
		return fmt.Errorf("imo is a required field")
	}
	return nil
}

func (*ShipList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func (*Ship) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}
