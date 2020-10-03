const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

// obtiene todo los productos
router.get('/', (req, res) => {
    
  const sql = 'SELECT p.id, p.name, p.url_image, p.price, p.discount, c.name as "categoriaNom"  FROM product p left join category c ON p.category = c.id';
  
    mysqlConnection.query(sql, (err, rows, fields) => {
      if (err) throw err;
      if(rows.length > 0) {
        res.json(rows);
      }else {
        const respuesta = {'err' : true, 'mensaje' : 'no hay productos'};

        res.send(respuesta);
      }
  });
  

});

// obtiene un producto
router.get('/:id', (req, res) => {
    const { id } = req.params; 

    const sql = `SELECT p.id, p.name, p.url_image, p.price, p.discount, c.name as "categoriaNom"  FROM product p left join category c ON p.category = c.id WHERE p.id = '${id}'`;
    
    mysqlConnection.query(sql, (err, rows, fields) => {
      if (err) throw err;
      if(rows.length > 0) {
        res.json(rows);
      }else {
        const respuesta = {'err' : true, 'mensaje' : 'No hay resultados'};

        res.send(respuesta);
      }
  });
    
});

// obtiene una categoria
router.get('/categoria/:id', (req, res) => {
  const { id } = req.params; 

  const sql = `SELECT id, name FROM product WHERE category = '${id}'`;
  
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    if(rows.length > 0) {
      res.json(rows);
    }else {
      const respuesta = {'err' : true, 'mensaje' : 'No hay resultados'};

      res.send(respuesta);
    }
  });
});

// buscar un producto por nombre
router.get('/producto/:name', (req, res) => {
  
  const { name } = req.params; 

  const sql = `SELECT p.id, p.name, p.url_image, p.price, p.discount, c.name as "categoriaNom"  FROM product p left join category c ON p.category = c.id WHERE p.name like '%${name}%'`;
  
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    if(rows.length > 0) {
      res.json(rows);
    }else {
      const respuesta = {'err' : true, 'mensaje' : 'No hay resultados'};

      res.send(respuesta);
    }
  });
  
});

// obtiene ofertas
router.get('/oferta/:name', (req, res) => {
  console.log('entro en oferta')
  const sql = 'SELECT p.id, p.name, p.url_image, p.price, p.discount, c.name as "categoriaNom"  FROM product p left join category c ON p.category = c.id order by  p.discount DESC limit  4';
  
    mysqlConnection.query(sql, (err, rows, fields) => {
      if (err) throw err;
      if(rows.length > 0) {
        res.json(rows);
      }else {
        const respuesta = {'err' : true, 'mensaje' : err};

        res.send(respuesta);
      }
  });
  

});



module.exports = router;