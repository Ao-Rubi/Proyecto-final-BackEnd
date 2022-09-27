import { validationResult } from 'express-validator';
import Pedido from '../models/pedidos';

export const listaPedidos = (req, res) => {
    res.status(200).json({
        mensaje: 'peticion get',
    });
};

export const crearPedido = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({
                error: error.array(),
            });
        }
        const nuevoPedido = new Pedido({
            usuario: req.body.usuario,
            fecha: req.body.fecha,
            productosdelmenu: req.body.productosdelmenu,
            estado: req.body.estado,
        });

        await nuevoPedido.save();
        res.status(201).json({
            mensaje: 'El pedido se creo con exito',
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'El pedido no pudo ser creado',
        });
    }
};
