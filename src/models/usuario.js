import mongoose, { mongo, Schema } from "mongoose";

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    email:{
        type: String,
        required: true,
        minlength: 4,
        maxlength: 60,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 5,
        // maxlength: 40
    },
    estado:{
        activo: true
    },
    prefil:{
        administrador: false,
        usuario: true
    }
})

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;