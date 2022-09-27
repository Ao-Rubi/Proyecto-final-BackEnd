import jwt from "jsonwebtoken";
//Middleware personalizado

const validarJWT = (req, res, next) => {
    //recibir el token
    const token = req.header("x-token");
    if(!token){
        // error de autenticacion 401
        return res.status(401).json({
            mensaje: "No hay token en la peticion"
        })
    }

    //Si el token existe
    try {
        const payload = jwt.verify(token, process.env.SECRET_JWT);
        req.id = payload.uid;
        req.nombre = payload.nombre;

    } catch (error) {
        console.log(error)
        return res.status(401).json({
            mensaje: "El token no es valido"
        })
    }

    next();
}

export default validarJWT;