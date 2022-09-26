import Usuario from "../models/usuario";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

export const login = (req, res) => {
    try {

        //Verifica si existe el email recibido

        //Confirmar si el password es valido

        //Responder que el usuario es valido

        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: "Usuario o contraseña invalidos"
        })
    }
}

export const crearUsuario = async (req, res) => {

    try {
        const {nombre, email, password} = req.body;

        // Verificar si el email existe
        let usuario = await Usuario.findOne({email});
        if (usuario) {
            //User existe
            return res.status(400).json({
                mensaje: "Ya existe un usuario con este correo"
            })
        }


        // Generar el token

        // Guardamos el nuevo user en la Base de datos
        usuario = new Usuario(req.body);

        // Encriptar la contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();
        res.status(201).json({
            mensaje: "Usuario creado correctamente",
            nombre: usuario.nombre,
            uid: usuario._id
        })


    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: "El usuario no pudo ser creado"
        })
    }

}

export const borrarUsuario = (res, req) => {
    res.send("logued")
}

// export const login = (res, req) => {
//     res.send("logued")
// }

// export const login = (res, req) => {
//     res.send("logued")
// }

// export const login = (res, req) => {
//     res.send("logued")
// }