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
];
export default validarPedido;