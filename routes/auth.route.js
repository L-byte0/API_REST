import Express from "express";
import { body } from "express-validator";
import { login, register } from "../controllers/auth.controller.js";
const router = Express.Router();

router.post(
  "/register",
  [
    body("email", "Formato de email incorrecto").trim().notEmpty().isEmail(),
    body("password", "Formato de contraseña incorrecta")
      .trim()
      .notEmpty()
      .isLength({ min: 6 }).withMessage("Contraseña corta"),
  ],
  register
);

router.post("/login", login);

export default router;
