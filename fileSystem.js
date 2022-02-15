const fs = require("fs")

const writeFile = async (file, data, log) => {
   try {
      const content = await fs.promises.writeFile(`./${file}`, JSON.stringify(data))
      console.log(log ? log : "Guardado con Exito")

      return content
   } catch (error) {
      console.log("Error de escritura!", error)
   }
}

const readFile = async (file) => {
   try {
      const content = await fs.promises.readFile(`./${file}`, "utf-8")
      let lista = JSON.parse(content)
      console.log(`Archivo ${file} leído con exito`)
      return lista
   } catch (error) {
      console.log("Error de Lectura!", error)
   }
}

module.exports = {
   writeFile,
   readFile,
}
