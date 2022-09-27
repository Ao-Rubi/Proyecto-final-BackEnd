import { validationResult } from 'express-validator';
import Pedido from '../models/pedidos';

export const listaPedidos = async (req, res) => {
    try {
        const listarPedidos = await Pedido.find();
        res.status(200).json(listarPedidos);
    } catch (error) {
        res.status(404).json({
            mensaje: 'No se encontraron los pedidos',
        });
    }
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

export const obtenerPedido = async (req, res) => {
    try {
        const pedidoBuscado = await Pedido.findById(req.params.id);
        res.status(200).json(pedidoBuscado);
    } catch (error) {
        res.status(404).json({
            mensaje: 'No se encontro el pedido',
        });
    }
};
