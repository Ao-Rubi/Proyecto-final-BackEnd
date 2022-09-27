import Usuario from "../models/usuario";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
    try {

        //Verifica si existe el email recibido
        const {email, password} = req.body

        let usuario = await Usuario.findOne({email});
        if (!usuario) {
            
            //Si el usuasrio existe
            return res.status(400).json({
                mensaje: "Correo o contraseña invalido"
            })
        }

        //Confirmar si el password es valido
        const passwordValido = bcrypt.compareSync(password, usuario.password);
        if(!passwordValido){

            return res.status(400).json({
                mensaje: "Correo o contraseña invalido"
            })
        }

        //Responder que el usuario es valido
        res.status(200).json({
            mensaje: "El usuario existe",
            uid: usuario._id,
            nombre: usuario.nombre
        })
        
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
