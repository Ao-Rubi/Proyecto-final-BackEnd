import { Router } from "express";
import { listaPedidos } from "../controllers/pedidos.controllers";

const router = Router()

router
    .route('/pedidos')
    .get(listaPedidos)

export default router;