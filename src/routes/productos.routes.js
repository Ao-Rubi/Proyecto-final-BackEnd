import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controllers";

const router = Router()

router
    .route('/')
    .get(listarProductos)
    .post(crearProducto);

export default router;