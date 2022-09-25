import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        unique: true
    },
    estado:{
        type: Boolean,
        required: true,
    },
    precio:{
        type: Number,
        required: true,
        min: 0,
        max: 4000
    },
    detalle:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 500
    },
    categoria:{
        type: String,
        required: true,
    },
    imagen:{
        type: String,
        required:true
    }
});

const Producto = mongoose.model('producto', productoSchema);
export default Producto;