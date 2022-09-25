import { Router } from "express";
import { crearProducto, editarProducto, listarProducto, listarProductos } from "../controllers/productos.controllers";

const router = Router()

router
    .route('/productos')
    .get(listarProductos)
    .post(crearProducto);

router
    .route('/productos/:id')
    .get(listarProducto)
    .put(editarProducto)
export default router;