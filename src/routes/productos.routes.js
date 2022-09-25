import { Router } from "express";
import { crearProducto, editarProducto, listarProductos } from "../controllers/productos.controllers";

const router = Router()

router
    .route('/productos')
    .get(listarProductos)
    .post(crearProducto);

router
    .route('/productos/:id')
    .put(editarProducto)
export default router;