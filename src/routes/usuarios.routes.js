import { Router } from "express";
import { crearUsuario, login } from "../controllers/usuarios.controller";

const router = Router();

router.route("/usuario").post(login)

router.route("/usuario/nuevo").post(crearUsuario)

export default router;