import { Router } from "express";
import { crearPedido, listaPedidos, obtenerPedido } from "../controllers/pedidos.controllers";

const router = Router()

router.route('/pedidos')
.get(listaPedidos)
.post(crearPedido)

router.route('/pedidos/:id')
.get(obtenerPedido)

export default router;