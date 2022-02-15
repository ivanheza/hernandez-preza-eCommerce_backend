///Clase Producto
const moment = require("moment")
const {writeFile, readFile} = require("../fileSystem")
const {customAlphabet} = require("nanoid")
//timeStamp
const date = moment().format("D-MMM-YY,h:mm a")
//ID
let nanoid = customAlphabet("123456789abcdzyxw", 8)

let products = null
let archivoProductos = "productos.txt"

const db = () => {
   readFile(archivoProductos).then((data) => (products = data))
}
db()

class Producto {
   constructor(name, price, image, info, codigo, stock) {
      this.date = date
      this.name = name
      this.price = new Number(price)
      this.image = image
      this.info = info
      this.codigo = codigo
      this.stock = stock
   }

   nuevoProducto() {
      db()
      const producto = {
         id: nanoid(),
         timestamp: date,
         name: this.name,
         price: this.price,
         image: this.image,
         info: this.info,
         codigo: this.codigo,
         stock: this.stock,
      }
      products.push(producto)
      writeFile(
         archivoProductos,
         products,
         `Se agregó el producto ${this.name} a la base de datos`
      )
      return producto
   }
   static getProducts() {
      db()
      return products
   }
   static getProductByID(id) {
      db()
      const result = products.find((p) => p.id == id)
      //console.log(result)
      return result
   }

   static deleteByID(id) {
      db()
      const prodActual = products.findIndex((p) => p.id == id)
      console.log(prodActual)
      if (prodActual >= 0) {
         const deleted = products.filter((p) => p.id !== id)
         //console.log("Se borro", id, " -en", deleted)
         writeFile(
            archivoProductos,
            deleted,
            `Se borro el producto con el ID:${id} de la base de datos`
         )
         return {mensaje: `Se borro el producto con el ID:${id} de la base de datos`}
      } else {
         return {error: `El producto con el id${id} no existe o ya fue borrado`}
      }
   }
   static editByID(id, name, price, image, info, codigo, stock) {
      const prodActual = products.findIndex((p) => p.id == id)
      console.log(prodActual)
      if (prodActual >= 0) {
         const edited = products.map((product) => {
            if (product.id == id) {
               product.timestamp = date
               product.name = name ? name : product.name
               product.price = price ? price : product.price
               product.image = image ? image : product.image
               product.info = info ? info : product.info
               product.codigo = codigo ? codigo : product.codigo
               product.stock = stock ? stock : product.stock
            }
            return product
         })
         //console.log("Editado", edited[prodActual])
         writeFile(archivoProductos, edited, `Se edito el producto con el id ${id}`)
         return edited[prodActual]
      } else {
         return {error: `Producto con el ID ${id} no encontrado`}
      }
   }
}

module.exports = {
   Producto,
}
