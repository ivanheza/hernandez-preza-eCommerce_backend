# Primera Entrega proyecto final: aplicación eCommerce Backend.

##### Inicializar desde consola con: _npm start_

El proyecto está dividio en dos grupos de rutas desde http://localhost:8000

_PRODUCTOS_ "/api/productos/"

-  GET "/" **Muestra todos los productos en la db productos.txt**
-  GET "/:idProducto" **Muestra el producto por ID**
-  POST "/" **Agrega un producto nuevo al archivo produtcos.txt**
-  PUT "/:idProducto" **Actualiza el producto solicitado por ID por el método PUT**
-  DELETE "/:idProducto" **Borra el producto con el ID selecicionado**

**Dentro del archivo _router/routes-productos.js_ cambiar el valor de la variable _admin_(linea 6 del codigo)a true para acceder a las rutas y métodos de Administrador**

_CARRITO_ "/api/carrito"

-  POST "/" **Agrega un carrito nuevo al archivo cartlist.txt**
-  DELETE "/:idcarrito" **Borra el carrito con el ID selecicionado**
-  GET "/:idcarrito/productos" **Muestra todos los productos dentro de un carrito con el ID solicitado**
-  POST "/:idcarrito/productos" **Agrega un producto específico al carrito con un ID específico**
-  DELETE "/:idcarrito/productos/:IDproducto" **Borra un producto específico(id) en el carrito con el ID selecicionado**

> > > > Importante > PARA LA PRUEBA DE ENDPOINTS GET PUT Y DELETE SE UTILIZO POSTMAN

### Dependencies

-  Para el servidor, manejo de rutas [Express JS](https://expressjs.com/es/ "Ver más")
-  Para el timestamp y fechas [Moment JS](https://momentjs.com/ "Ver más")
-  Para la asignación de IDs [uuid](https://www.npmjs.com/package/uuid "Ver más")

#### Created by: **Ivan Hernández Preza**
