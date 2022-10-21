import Usuario from "../models/usuario";
import bcrypt from "bcryptjs";
import generarJWT from "../helpers/jwt";

export const login = async (req, res) => {
    try {

        const {email, password} = req.body

        let usuario = await Usuario.findOne({email});
        if (!usuario) {
            
            return res.status(400).json({
                mensaje: "Correo o contraseña invalido"
            })
        }

        const passwordValido = bcrypt.compareSync(password, usuario.password);
        if(!passwordValido){

            return res.status(400).json({
                mensaje: "Correo o contraseña invalido"
            })
        }

        if (usuario.estado === false) {
            return res.status(406).json({
                mensaje:"El usuario está suspendido"
            })
        }

        const token = await generarJWT(usuario._id, usuario.nombre);

        res.status(200).json({
            mensaje: "El usuario existe",
            uid: usuario._id,
            nombre: usuario.nombre,
            token: token,
            email: usuario.email,
            perfil: usuario.perfil
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

        let usuario = await Usuario.findOne({email});
        if (usuario) {
            return res.status(400).json({
                mensaje: "Ya existe un usuario con este correo"
            })
        }

        usuario = new Usuario(req.body);

        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        const token = await generarJWT(usuario._id, usuario.nombre);

        await usuario.save();
        res.status(201).json({
            mensaje: "Usuario creado correctamente",
            nombre: usuario.nombre,
            uid: usuario._id,
            token: token
        })


    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: "El usuario no pudo ser creado"
        })
    }

}

export const listarUsuarios = async (req,res) =>{
    try {
        const usuarios = await Usuario.find({}, {password: 0});
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error, no se encontraron los usuarios'
        })
    }
}

export const borrarUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'El pedido se elimino con exito',
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'El pedido no pudo ser eliminado',
        });
    }
};

export const suspenderUsuario = async(req, res)=>{
    try {
        await Usuario.updateOne({ _id: req.params.id }, { estado: false });
        res.status(200).json({
            mensaje: "Usuario suspendido correctamente"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error, no se pudo suspender al usuario"
        })
    }
}

export const habilitarUsuario = async(req, res)=>{
    try {
        await Usuario.updateOne({ _id: req.params.id }, { estado: true });
        res.status(200).json({
            mensaje: "Usuario habilitado correctamente"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error, no se pudo habilitar al usuario"
        })
    }
}

