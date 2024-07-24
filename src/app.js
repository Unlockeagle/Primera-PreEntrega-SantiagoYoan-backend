import express from "express"
import productsRouter from "./routes/product.route.js"
import cartsRouter from "./routes/cart.router.js"

const app = express()
const PUERTO = 8080;
//middleware
app.use(express.json())

//Rutas
app.use("/", productsRouter)
app.use("/", cartsRouter)










//listen
app.listen(PUERTO, () => {
    console.log(`Escuchado el puerto http://localhost:${PUERTO}`)
})

