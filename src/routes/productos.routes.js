import { Router } from "express";
import { crearProducto, editarProducto, eliminarProducto, listarProducto, listarProductos } from "../controllers/productos.controllers";

const router = Router()

router
    .route('/productos')
    .get(listarProductos)
    .post(crearProducto);

router
    .route('/productos/:id')
    .get(listarProducto)
    .put(editarProducto)
    .delete(eliminarProducto)
    
export default router;