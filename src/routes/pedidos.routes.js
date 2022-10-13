import { Router } from "express";
import { borrarPedido, crearPedido, editarPedido, listaPedidos, obtenerPedido , entregado} from "../controllers/pedidos.controllers";
import validarPedido from "../helpers/validacionPedidos";

const router = Router()

router.route('/pedidos')
.get(listaPedidos)
.post(validarPedido,crearPedido);

router
    .route('/pedidos/:id')
    .get(obtenerPedido)
    .put(validarPedido,editarPedido)
    .delete(borrarPedido);

router
    .route("/entregado/:id")
    .post(entregado);

export default router;