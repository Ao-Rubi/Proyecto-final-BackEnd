import { Router } from "express";
import { crearProducto, editarProducto, eliminarProducto, listarProducto, listarProductos } from "../controllers/productos.controllers";
import validarProducto from "../helpers/productos.validacion";

const router = Router()

router
    .route('/productos')
    .get(listarProductos)
    .post(validarProducto,crearProducto);

router
    .route('/productos/:id')
    .get(listarProducto)
    .put(validarProducto,editarProducto)
    .delete(eliminarProducto)
    
export default router;