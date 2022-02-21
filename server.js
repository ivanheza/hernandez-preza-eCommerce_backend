const express = require("express")
const app = express()
const PORT = 8000
const path = require("path")

const shopRoutes = require("./router/routes-productos")
const cartRoutes = require("./router/routes-carrito")
// Codificacion

app.use(express.json())
app.use(express.urlencoded({extended: true}))
///ROUTES
app.use("/api/productos", shopRoutes)
app.use("/api/carrito", cartRoutes)

//espacio Publico del servidor
app.use(express.static("./public"))

// HomeROUTE
app.get("/", (req, res) => {
   // Here user can also design an
   // error page and render it
   res.send(`<div>
      <h1>HOME</h1>
      <hr />
      <h3>Pruebas</h3>
      <a href="${"/api/productos"}">Productos</a> 
      <p>/api/productos/ <strong>IDproducto</strong> /productos</p>
      <hr />
      <a href="${"/api/carrito"}">Carrito</a>
      <p>/api/carrito/ <strong>IDcarrito</strong> /productos</p>
   </div>`)
})
// Default route
app.get("*", (req, res) => {
   // Here user can also design an
   // error page and render it
   res.send({error: 0, descripcion: "La ruta que buscas no existe"})
})

//SERVIDOR
app.listen(PORT, (err) => {
   if (err) {
      throw new Error(`Error en el Servidor ${err}`)
   }
   console.log(`Listnening Express JS at port:${PORT}`)
})
