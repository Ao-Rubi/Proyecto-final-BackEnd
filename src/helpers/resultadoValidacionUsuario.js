import { validationResult } from "express-validator";

const resultadosValidacionesUsuario = (req, res, next) => {
    //Validacion
    const errors = validationResult(req);
    //preguntar si hay errores
    if (!errors.isEmpty()) {
        return res.status(400).json(
            {
                errors: errors.mapped() //Devuelve el error ocurrido
            }
        )
    }
    //Le digo que continue con el resto de la funcion
    next();
}

export default resultadosValidacionesUsuario;