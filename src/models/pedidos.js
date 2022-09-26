import mongoose, { Schema, schema } from 'mongoose';

const pedidoSchema = new Schema({
    usuario: {
        type: String,
        required: true,
        unique: true,
    },
    fecha: {
        type: String,
        required: true,
    },
    productosDelMenu: {
        type: String,
        required: true,
    },
    estado: {
        type: Boolean,
        required: true,
    },
});
const Pedido = mongoose.model('pedido', pedidoSchema);

export default Pedido;
