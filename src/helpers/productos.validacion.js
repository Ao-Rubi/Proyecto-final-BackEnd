import { check } from "express-validator";
import resultadosValidacion from "./resultadoValidacion";

const validacionProducto = [
    check('nombre')
        .notEmpty()
        .withMessage('El nombre del producto es obligatorio')
        .isLength({min:2, max:50})
        .withMessage('El producto debe tener entre 2 y 50 caracteres'),
    check('estado')
        .notEmpty()
        .withMessage('El estado del producto es obligatorio')
        .isBoolean()
        .withMessage('El estado debe estar en true o false'),
    check('precio')
        .notEmpty()
        .withMessage('El precio del producto es obligatorio')
        .isNumeric()
        .withMessage('El precio debe ser un numero')
        .custom((value)=>{if(value>=0 && value<=9000) return true 
        else throw new Error('El precio debe estar entre 0 y 9000')}),
    check('detalle')
        .notEmpty()
        .withMessage('El detalle del producto es obligatorio')
        .isLength({min:5,max:500}),
    check('categoria')
        .notEmpty()
        .withMessage('La categoria del producto es obligatoria'),
    check('imagen')
        .notEmpty()
        .withMessage('La url de la imagen es obligatoria')
        .isURL()
        .withMessage('La url de la imagen del producto no es correcta'),

        (req,res,next) =>{
            resultadosValidacion(req,res,next)
        }
];

export default validacionProducto;