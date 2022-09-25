import Producto from "../models/producto";

export const crearProducto = async (req,res) =>{
    try {
        const nuevoProducto = new Producto({
            nombre: req.body.nombre,
            estado: req.body.estado,
            precio: req.body.precio,
            detalle: req.body.detalle,
            categoria: req.body.categoria,
            imagen: req.body.imagen
        });
        await nuevoProducto.save();
        res.status(201).json({
            mensaje: 'Producto creado'
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'El producto no pudo ser creado'
        });
    }
}