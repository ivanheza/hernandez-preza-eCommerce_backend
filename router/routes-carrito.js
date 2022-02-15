const {Router} = require("express")
const cartController = require("../controllers/controller-carrito")
const router = Router()

let admin = false
let login = (req, res, next) => {
   if (!admin) {
      console.log(req.path)
      res.status(403)
      return res.send({error: -1, descripcion: `ruta no autorizada`})
   }
   next()
}

//GET PRUEBA LISTA CARRITOS
router.get("/", cartController.getAll)

// POST NEW CART
router.post("/", cartController.addCart)

//GET CARRITO POR ID LISTADO DE PRODUCTOS DENTRO
router.get("/:id/productos", cartController.getCarrito)

///POST Add To Cart
router.post("/:id/productos/:id_prod", cartController.addToCart)

//DELETE CART BY ID
router.delete("/:id", cartController.deleteCart)

//DELETE PRODUCT BY ID IN CART
router.delete("/:id/productos/:id_prod", cartController.deleteByID)

//ModuleExport
module.exports = router
