# api-bsale_test
El objetivo de esta API, es presentar una prueba para Bsale.

La API está hecha en nodejs con express y levantada en un servidor EC2 de aws, con una ip estatica 50.19.163.37:3000. Está conectada a una base de datos Mysql que proporsionó Bsale, es un base de datos peque, con 2 tablas, "product" con 57 productos y "category" con 7 categorias.

Mode de uso.

La API devuevle un documento en Json

Traer todo los productos
http://50.19.163.37:3000/

Obtener un producto
http://50.19.163.37:3000/:id
(el id de be ser número y debe tenerlo en la tabla)

Obtener productos por categoria
http://50.19.163.37:3000/categoria/:id
(el id de be ser número y debe tenerlo en la tabla)

Buscar por nombre
http://50.19.163.37:3000//producto/:name
(Esta API buscará un string y lo comparará con los nombres de los productos y enviará los productos que tengan ese nombre o parecido)

La API es pequeña por el tiempo limitado que se dipo para la prueba.

Gracias.

Moise Magna (KuboDev)