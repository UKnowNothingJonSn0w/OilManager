package db

import (
	"database/sql"
	"fifczak/go_test_backend/models"
	"fmt"
	"time"
)

// this map stores the users sessions. For larger scale applications, you can use a database or cache for this purpose
var sessions = map[string]session{}

type session struct {
	username string
	expiry   time.Time
}

func (s session) isExpired() bool {
	return s.expiry.Before(time.Now())
}

func (db Database) GetAllShips() (*models.ShipList, error) {

	list := &models.ShipList{}

	rows, err := db.Conn.Query("SELECT id, imo, name, note FROM ships ORDER BY id DESC")
	if err != nil {
		return list, err
	}

	for rows.Next() {
		var sship models.Ship
		err := rows.Scan(&sship.ShipPkey, &sship.Imo, &sship.Name, &sship.Note)
		if err != nil {
			return list, err
		}
		list.Ships = append(list.Ships, sship)
	}
	return list, nil
}

func (db Database) AddShip(ship *models.Ship) error {
	query := fmt.Sprintf(`
	INSERT INTO oil.ships (imo, name, note) VALUES 
	('%s',' %s', '%s');
	`,
		ship.Imo, ship.Name, ship.Note.String)
	fmt.Println(query)
	err := db.Conn.QueryRow(query).Scan()
	if err != nil {
		if err != sql.ErrNoRows {
			fmt.Println(err.Error())
			return err
		}
	}

	return nil
}
