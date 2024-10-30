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

    static addInventory(req, res) {
        const item = {
            Inventory_Id: req.body.Inventory_Id,
            Name: req.body.Name,
            Description: req.body.Description
        };
        inventoryService.addInventory(item, (err, results) => {
            if (err) {
                return res.status(500).send('Error adding inventory item');
            }
            res.redirect('/success?action=add');
        });
    }

    static deleteInventory(req, res) {
        const id = req.params.id;
        inventoryService.deleteInventory(id, (err, results) => {
            if (err) {
                return res.status(500).send('Error deleting inventory item');
            }
            res.redirect('/success?action=delete');
        });
    }
}

module.exports = InventoryController;
