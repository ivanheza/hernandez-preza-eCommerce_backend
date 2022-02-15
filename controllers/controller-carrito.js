const Cart = require("../utils/cart")
const {Producto} = require("../utils/producto")

exports.getAll = (req, res) => {
   const carts = Cart.getCarts()
   res.send(carts)
}

exports.addCart = (req, res) => {
   let cart = Cart.newCart()
   res.send(cart)
   //console.log("Posting NewCart", cart)
}
//GET
exports.getCarrito = async (req, res) => {
   const id = req.params.id
   let cart = await Cart.getCart(id)
   //console.log("IDCART", id)
   res.send(cart)
}

exports.addToCart = (req, res) => {
   const id = req.params.id
   const idProd = req.params.id_prod
   //Buscamos el Prod por ID
   const product = Producto.getProductByID(idProd)
   // Agregamos el Producto
   const added = Cart.saveProduct(product, id)
   //console.log(added)
   res.send(added)
}

exports.deleteCart = async (req, res) => {
   const id = req.params.id
   const cart = await Cart.deleteCart(id)
   //console.log(cart)
   res.send(`Se borro el carrito con el ID ${id}`)
}

exports.deleteByID = (req, res) => {
   const idCart = req.params.id
   const idProd = req.params.id_prod
   let msg = `ID Carrito:${idCart} - ID Producto ${idProd}`
   console.log(msg)
   Cart.deleteProduct(idCart, idProd)
   res.send(msg)
}
