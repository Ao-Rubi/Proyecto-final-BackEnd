import { Router } from "express";
import { crearUsuario, login } from "../controllers/usuarios.controller";
import { check } from "express-validator";

const router = Router();


// Agregar validaciones con express validator
router.route("/usuario")
.get()
.post(login);

router.route("/usuario/nuevo")
.post([],crearUsuario);

export default router;