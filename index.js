// index.js
const express = require('express');
const app = express();
const path = require('path');
const InventoryController = require('./controllers/inventoryController');
const connection = require('./config/db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/inventory', InventoryController.getInventory);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
