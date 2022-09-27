import { check } from 'express-validator';
import resultadoValidacion from './resultadoValidacion';

const validarPedido = [
    check('usuario')
        .notEmpty()
        .withMessage('El usuario del pedido es obligatorio')
        .isLength({ min: 4, max: 30 })
        .withMessage(
            'El nombre de usuario debe tener entre ( 4 y 30 ) caracteres'
        ),
    //falta validar fecha,productosdelmenu y estado
    //validar productos del menu
    check('productosdelmenu')
        .custom((input) => {
            let productosValidados = 0
            input.forEach((producto) => {
                if (producto.length >= 2 && producto.length <= 30) productosValidados++;
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
];
export default validarPedido;