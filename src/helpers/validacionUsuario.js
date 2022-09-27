import { check } from "express-validator";
import resultadosValidacionesUsuario from "../helpers/resultadoValidacionUsuario";

export const validarUsuario = [
    check("email")
    .notEmpty().withMessage("El Email es obligatorio")
    .isEmail().withMessage("Debe ser un email valido")
    .isLength({min: 4, max: 60}).withMessage("El email debe tener entre 4 a 60 caracteres"),

    check("password")
    .notEmpty().withMessage("La contraseña es obligatoria")
    .isLength({min: 5}).withMessage("La contraseña debe como minimo 5 caracteres"),

    (req, res, next) => {
        resultadosValidacionesUsuario(req, res, next)
    },
];

export const validarCreacionUsuario = [
    check("nombre").notEmpty().withMessage("El nombre es obligatorio")
    .isLength({min: 2, max: 30}).withMessage("El nombre debe ser minimo 2 y maximo 30 caracteres"),

    check("email")
    .notEmpty().withMessage("El Email es obligatorio")
    .isEmail().withMessage("Debe ser un email valido")
    .isLength({min: 4, max: 60}).withMessage("El email debe tener entre 4 a 60 caracteres"),

    check("password")
    .notEmpty().withMessage("La contraseña es obligatoria")
    .isLength({min: 5}).withMessage("La contraseña debe como minimo 5 caracteres"),
    (req, res, next) => {
        resultadosValidacionesUsuario(req, res, next)
    },
];