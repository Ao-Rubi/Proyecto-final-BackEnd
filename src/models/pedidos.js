import mongoose, { Schema } from 'mongoose';

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
    productosdelmenu: {
        type: Array,
        required: true,
    },
    estado: {
        type: Boolean,
        required: true,
    },
});
const Pedido = mongoose.model('pedido', pedidoSchema);

export default Pedido;
