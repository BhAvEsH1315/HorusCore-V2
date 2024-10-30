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
}

module.exports = InventoryService;
