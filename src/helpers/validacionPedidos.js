import { check } from 'express-validator';
import resultadoValidacion from './resultadoValidacion';
import moment from 'moment';

const validarPedido = [
    check('usuario')
        .notEmpty()
        .withMessage('El usuario del pedido es obligatorio')
        .isLength({ min: 4, max: 30 })
        .withMessage(
            'El nombre de usuario debe tener entre ( 4 y 30 ) caracteres'
        ),
    //falta validar fecha,productosdelmenu y estado
    //validar fecha
    check('fecha')
        .notEmpty()
        .withMessage('La fecha es obligatoria')
        .custom((input) => {
            const result = moment(input, "DD/MM/YY",true).isValid();
            console.log(result)
            if (result) {
                return true;
            } else {
                throw new Error('La fecha debe respetar el siguiente formato ( DD/MM/AA )');
            }
        }),
    //validar productos del menu
    check('productosdelmenu')
        .notEmpty()
        .withMessage('Los productos son obligatorios')
        .custom((input) => {
            let productosValidados = 0;
            input.forEach((producto) => {
                if (producto.length >= 2 && producto.length <= 30)
                    productosValidados++;
            });
            if (input.length === productosValidados) {
                return true;
            } else {
                return false;
            }
        })
        .withMessage(
            'Cada producto agregado debe contener entre (2 y 30 ) caracteres'
        ),
        check('estado')
        .notEmpty()
        .withMessage('El estado es obligatorio')
        .custom((input)=>{
         if (input === Boolean(true)) return true;
         else throw new Error( 'La respuesta debe ser de tipo booleana' );
        }) ,
    (req, res, next) => {
        resultadoValidacion(req, res, next);
    },
];
export default validarPedido;
