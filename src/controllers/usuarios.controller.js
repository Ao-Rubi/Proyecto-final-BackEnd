import Usuario from "../models/usuario"

export const login = (req, res) => {
    res.send("logued")
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

        // Encriptar la contraseña

        // Generar el token

        // Guardamos el nuevo user en la Base de datos
        usuario = new Usuario(req.body);
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

// export const login = (res, req) => {
//     res.send("logued")
// }

// export const login = (res, req) => {
//     res.send("logued")
// }

// export const login = (res, req) => {
//     res.send("logued")
// }

// export const login = (res, req) => {
//     res.send("logued")
// }