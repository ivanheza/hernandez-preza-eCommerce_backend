const {Router} = require("express")
const prodController = require("../controllers/controller-productos")
const router = Router()

let admin = true
let login = (req, res, next) => {
   if (!admin) {
      console.log(req.path)
      res.status(403)
      return res.send({error: -1, descripcion: `ruta no autorizada`})
   }
   next()
}

//PRUEBAS INSTANCIAS
///GET
router.get("/", login, prodController.getProducts)
///GET ID
router.get("/:id", prodController.getByID)
//POST
router.post("/", login, prodController.addProduct)

///PUT
router.put("/:id", login, prodController.editByID)

///DELETE
router.delete("/:id", login, prodController.deleteById)

module.exports = router
