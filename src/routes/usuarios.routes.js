import { Router } from "express";
import { crearUsuario, login, listarUsuarios, suspenderUsuario, habilitarUsuario, borrarUsuario } from "../controllers/usuarios.controller";
import { validarCreacionUsuario, validarUsuario } from "../helpers/validacionUsuario";

const router = Router();

router.route("/")
.get(listarUsuarios)
.post([ validarUsuario ],login);

router.route("/suspender/:id")
.post(suspenderUsuario);

router.route("/habilitar/:id")
.post(habilitarUsuario);

router.route("/nuevo")
.post([ validarCreacionUsuario ],crearUsuario);

router.route("/eliminar/:id")
.delete(borrarUsuario);

export default router;