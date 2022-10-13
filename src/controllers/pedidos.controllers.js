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

export const editarPedido = async (req, res) => {
    try {
        await Pedido.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: 'El pedido fue modificado con exito',
        });
    } catch (error) {
        res.status(404).json({
            mensaje: 'Error al buscar el pedido',
        });
    }
};

export const borrarPedido = async (req, res) => {
    try {
        await Pedido.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'El pedido se elimino con exito',
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'El pedido no pudo ser eliminado',
        });
    }
};

export const entregado = async (req, res) => {
    try {
        //await Producto.findByIdAndUpdate(req.params.id,req.body);
        await Pedido.updateOne({ _id: req.params.id }, { estado: true });
        res.status(200).json({
            mensaje: "Usuario suspendido correctamente"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error, no se pudo suspender al usuario"
        })
    }
};

