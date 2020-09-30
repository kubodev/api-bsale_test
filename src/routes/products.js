const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

// obtiene todo los productos
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM product', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// obtiene un producto
router.get('/:id', (req, res) => {
    const { id } = req.params; 
    mysqlConnection.query('SELECT * FROM product WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
});

// obtiene un producto
router.get('/categoria/:id', (req, res) => {
    const { id } = req.params; 
    mysqlConnection.query('SELECT * FROM product WHERE category = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
});

module.exports = router;