// services/inventoryService.js
const db = require('../config/db');

class InventoryService {
    getInventory(callback) {
        const query = 'SELECT * FROM Inventory';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }

    addInventory(item, callback) {
        const query = 'INSERT INTO Inventory (Inventory_Id, Name, Description) VALUES (?, ?, ?)';
        db.query(query, [item.Inventory_Id, item.Name, item.Description], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }

    deleteInventory(id, callback) {
        const query = 'DELETE FROM Inventory WHERE Inventory_Id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }
}

module.exports = InventoryService;
