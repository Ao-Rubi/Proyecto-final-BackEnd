import { Router } from "express";
import { crearPedido, editarPedido, listaPedidos, obtenerPedido } from "../controllers/pedidos.controllers";

const router = Router()

router.route('/pedidos')
.get(listaPedidos)
.post(crearPedido)

router.route('/pedidos/:id')
.get(obtenerPedido)
.put(editarPedido)

export default router;