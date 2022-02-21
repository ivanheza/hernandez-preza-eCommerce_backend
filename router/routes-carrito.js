const {Router} = require("express")
const cartController = require("../controllers/controller-carrito")
const router = Router()

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
