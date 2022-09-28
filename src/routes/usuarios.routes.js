import { Router } from 'express';
import { crearUsuario, login } from '../controllers/usuarios.controller';
import {
    validarCreacionUsuario,
    validarUsuario,
} from '../helpers/validacionUsuario';

const router = Router();

// Agregar validaciones con express validator
router.route('/')
.post([validarUsuario], login);

router.route('/nuevo')
.post([validarCreacionUsuario], crearUsuario);

export default router;
