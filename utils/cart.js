///Clase CART
const moment = require("moment")
//_Timestamp
const date = moment().format("D-MMM-YY,h:mm a")
//ID
const {customAlphabet} = require("nanoid")
const {readFile, writeFile} = require("../fileSystem")
let nanoid = customAlphabet("123456789abcdzyxw", 4)
let idCart = `cart_${nanoid()}`
let cartDocu = "cartlist.txt"

//DB Cart
let cartList = null
const db = () => {
   readFile(cartDocu).then((data) => (cartList = data))
}
db()

module.exports = class Cart {
   //metodo para agregar carrito
   static newCart() {
      db()
      console.log("PruebaDB", cartList.length)
      if (cartList.length == 0) {
         let cart = {id: `cart_${nanoid()}`, timestamp: date, products: []}
         cartList.push(cart)
         writeFile(cartDocu, cart, "carritoNuevo")
      } else {
         idCart
         let cart2 = {id: `cart_${nanoid()}`, timestamp: date, products: []}
         cartList.push(cart2)
         writeFile(cartDocu, cartList, "se agregó carrito")
         return cart2
      }
   }
   //Metodo para guardar producto en el carrito por ID
   static saveProduct(product, cartID) {
      //Buscamos por ID el carrito
      db()
      const carritoActual = cartList.findIndex((d) => d.id == cartID)

      //console.log("indexCart", carritoActual)
      // Si coincide el ID pasaremos a agregarlo al carrito con ese ID
      if (carritoActual >= 0) {
         //----Por id buscamos si el producto ya esta products del carrito
         const inCart = cartList[carritoActual].products.findIndex(
            (p) => p.id == product.id
         )
         //console.log("incart", inCart)
         if (inCart >= 0) {
            const cartProduct = cartList[carritoActual].products[inCart]
            //console.log("CartProduct", cartProduct)
            cartProduct.qty += 1
         } else {
            product.qty = 1
            cartList[carritoActual].products.push(product)
         }

         //Calculamos el Total
         let total = cartList[carritoActual].products.reduce((total, current) => {
            return total + current.price * current.qty
         }, 0)
         cartList[carritoActual].totalPrice = total
         //console.log(cartList)
         writeFile(cartDocu, cartList, `Se Agregó ${product.name} al carrito`)
         return cartList[carritoActual].products
      }
   }

   static getCarts() {
      db()
      return cartList
   }
   //OBTENER CARRITO POR ID
   static getCart(id) {
      db()
      //console.log(cartList)
      const buscar = cartList.find((c) => c.id == id)
      // console.log("prueba GetCart", buscar)

      return buscar
   }
   /// BORRAR CARRITO POR ID
   static deleteCart(cartId) {
      db()
      //console.log(cartId)
      //const carritoActual = cartList.findIndex((d) => d.id === cartId)
      const nuevoCartlist = cartList.filter((d) => d.id !== cartId)

      writeFile(cartDocu, nuevoCartlist, `Se borro el carrito con el ID: ${cartId}`)
      return nuevoCartlist
   }
   /// BORRAR PRODUCTO POR ID DE UN CARRITO ESPECIFICO

   static async deleteProduct(cartId, productId) {
      const carritoActual = await cartList.findIndex((d) => d.id === cartId)
      console.log(carritoActual)
      if (carritoActual >= 0) {
         const exists = cartList[carritoActual].products.findIndex(
            (p) => p.id == productId
         )
         console.log(cartList[carritoActual].totalPrice)
         cartList[carritoActual].products.splice(exists, 1)
         let total = cartList[carritoActual].products.reduce((total, current) => {
            return total + current.price * current.qty
         }, 0)

         cartList[carritoActual].totalPrice = total
      }
   }
}
