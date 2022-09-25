import { Router } from "express";
import { crearProducto } from "../controllers/productos.controllers";

const router = Router()

router
    .route('/')
    .get((req, res) => {
        res.status(200).json({
            mensaje: 'peticion get'
        })
    })
    .post(crearProducto);

export default router;