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
            mensaje: 'Error, el producto no pudo ser creado'
        });
    }
}

export const listarProductos = async (req,res) =>{
    try {
        const arregloProducto = await Producto.find();
        res.status(200).json(arregloProducto);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error, no se encontraron los productos'
        })
    }
}

export const editarProducto = async (req,res) =>{
    try {
        await Producto.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            mensaje: "El producto se edito correctamente"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error, no se pudo editar el producto"
        })
    }
}