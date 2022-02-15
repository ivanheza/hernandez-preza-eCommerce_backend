const {Producto} = require("../utils/producto")

///FOR USERS
exports.getProducts = (req, res) => {
   const productos = Producto.getProducts()
   //console.log(productos)
   res.send(productos)
}

exports.getByID = (req, res) => {
   const id = req.params.id
   const result = Producto.getProductByID(id)
   //console.log(id)
   res.send(result)
}

//ADMIN

exports.addProduct = (req, res) => {
   const {name, price, image, info, codigo, stock} = req.body
   //console.log(req.body)
   const producto = new Producto(name, price, image, info, codigo, stock).nuevoProducto()

   console.log(producto)
   res.send(producto)
}

exports.editByID = (req, res) => {
   const id = req.params.id
   const {name, price, image, info, codigo, stock} = req.body
   // const listaProductos = Producto.getProducts()
   const edited = Producto.editByID(id, name, price, image, info, codigo, stock)
   res.send(edited)
}

exports.deleteById = (req, res) => {
   const id = req.params.id
   //console.log(id)
   const deleted = Producto.deleteByID(id)
   //console.log(deleted)
   res.send(deleted)
}
