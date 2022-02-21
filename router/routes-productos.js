const {Router} = require("express")
const prodController = require("../controllers/controller-productos")
const router = Router()

//Middleware para checar si se es administrador y puede realizar cambios. En caso de serlo pasa a la ruta. Cambiar la variable Admin a true para acceder a las rutas y metodos
let admin = false
let login = (req, res, next) => {
   if (!admin) {
      console.log(req.path)
      res.status(403)
      return res.send({
         error: 403,
         descripcion: `Ruta autorizada solo para Administradores`,
      })
   }
   next()
}

///Prueba de Middleware para usuarios registrados
let user = false
let loginUser = (req, res, next) => {
   if (!user) {
      console.log(req.path)
      res.status(401)
      return res.send({
         error: -1,
         descripcion: `Debes estar registrado como usuario para acceder a esta ruta`,
      })
   }
   next()
}

////////>>> ADMIN AND USERS
///GET ALL
router.get("/", loginUser, prodController.getProducts)
///GET BY ID
router.get("/:id", prodController.getByID)

/////>>>PRUEBAS INSTANCIAS //ADMIN

//POST
router.post("/", login, prodController.addProduct)

///PUT Edit Product
router.put("/:id", login, prodController.editByID)

///DELETE
router.delete("/:id", login, prodController.deleteById)

module.exports = router
