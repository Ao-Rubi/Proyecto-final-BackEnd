import { Router } from "express";
import { crearUsuario, login, listarUsuarios, suspenderUsuario, habilitarUsuario } from "../controllers/usuarios.controller";
import { validarCreacionUsuario, validarUsuario } from "../helpers/validacionUsuario";

const router = Router();


// Agregar validaciones con express validator
router.route("/")
.get(listarUsuarios)
.post([ validarUsuario ],login);

router.route("/suspender/:id")
.post(suspenderUsuario);

router.route("/habilitar/:id")
.post(habilitarUsuario);

router.route("/nuevo")
.post(
    [ validarCreacionUsuario ],crearUsuario);

export default router;