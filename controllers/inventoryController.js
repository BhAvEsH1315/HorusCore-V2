// controllers/inventoryController.js
const InventoryService = require('../services/inventoryService');
const inventoryService = new InventoryService();

class InventoryController {
    static getInventory(req, res) {
        inventoryService.getInventory((err, inventoryData) => {
            if (err) {
                return res.status(500).send('Error fetching inventory data');
            }
            res.render('inventory', { inventory: inventoryData });
        });
    }
}

module.exports = InventoryController;
