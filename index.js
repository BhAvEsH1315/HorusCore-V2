// index.js
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const InventoryController = require('./controllers/inventoryController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/inventory', InventoryController.getInventory);
app.post('/inventory/add', InventoryController.addInventory);
app.post('/inventory/delete/:id', InventoryController.deleteInventory);

app.get('/success', (req, res) => {
    const action = req.query.action;
    res.render('success', { action });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
