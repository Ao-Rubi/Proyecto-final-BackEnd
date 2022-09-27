import { Router } from "express";
import { crearPedido, listaPedidos } from "../controllers/pedidos.controllers";

const router = Router()

router.route('/pedidos')
.get(listaPedidos)
.post(crearPedido)

export default router;