package db

import (
	"fifczak/go_test_backend/models"
)

func (db Database) GetAllUsers() (*models.UserList, error) {
	list := &models.UserList{}

	rows, err := db.Conn.Query("SELECT id,login, password FROM users ORDER BY id DESC")
	if err != nil {
		return list, err
	}

	for rows.Next() {
		var uuser models.User
		err := rows.Scan(&uuser.UserPkey, &uuser.Login, &uuser.Password)
		if err != nil {
			return list, err
		}
		list.Users = append(list.Users, uuser)
	}
	return list, nil
}

// func (db Database) GetCaseById(caseId int) (models.Case, error) {
// 	ccase := models.Case{}

// 	query := `SELECT * FROM cases WHERE id = $1;`
// 	row := db.Conn.QueryRow(query, caseId)
// 	switch err := row.Scan(&ccase.CasePkey, &ccase.CaseNumberFormat); err {
// 	case sql.ErrNoRows:
// 		return ccase, ErrNoMatch
// 	default:
// 		return ccase, err
// 	}
// }

// func (db Database) AddCase(ccase *models.Case) error {
// 	var casePkey int
// 	var CaseNumberFormat string
// 	query := `INSERT INTO items (name, description) VALUES ($1, $2) RETURNING id, created_at`
// 	err := db.Conn.QueryRow(query, ccase.CasePkey, ccase.CaseNumberFormat).Scan(&casePkey, &CaseNumberFormat)
// 	if err != nil {
// 		return err
// 	}

// 	ccase.CasePkey = casePkey
// 	return nil
// }

// func (db Database) GetItemById(itemId int) (models.Item, error) {
// 	item := models.Item{}

// 	query := `SELECT * FROM items WHERE id = $1;`
// 	row := db.Conn.QueryRow(query, itemId)
// 	switch err := row.Scan(&item.ID, &item.Name, &item.Description, &item.CreatedAt); err {
// 	case sql.ErrNoRows:
// 		return item, ErrNoMatch
// 	default:
// 		return item, err
// 	}
// }

// func (db Database) DeleteItem(itemId int) error {
// 	query := `DELETE FROM items WHERE id = $1;`
// 	_, err := db.Conn.Exec(query, itemId)
// 	switch err {
// 	case sql.ErrNoRows:
// 		return ErrNoMatch
// 	default:
// 		return err
// 	}
// }

// func (db Database) UpdateItem(itemId int, itemData models.Item) (models.Item, error) {
// 	item := models.Item{}
// 	query := `UPDATE items SET name=$1, description=$2 WHERE id=$3 RETURNING id, name, description, created_at;`
// 	err := db.Conn.QueryRow(query, itemData.Name, itemData.Description, itemId).Scan(&item.ID, &item.Name, &item.Description, &item.CreatedAt)
// 	if err != nil {
// 		if err == sql.ErrNoRows {
// 			return item, ErrNoMatch
// 		}
// 		return item, err
// 	}

// 	return item, nil
// }
