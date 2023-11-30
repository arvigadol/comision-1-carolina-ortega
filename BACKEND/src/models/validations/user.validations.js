import { body } from 'express-validator';
import { applyValidations } from '../../middlewares/applyValidations.js';

export const createUserValidations = [
  body('avatarURL')
    .notEmpty().withMessage('El campo { avatarURL } no debe estar vacio.')
    .isString().withMessage('El campo { avatarURL } debe ser un string.')
    .isURL().withMessage('El campo { avatarURL } debe ser una URL válida.'),
  body('email')
    .trim().notEmpty().withMessage('El campo { email } no debe estar vacio.')
    .isEmail().withMessage('El campo { email } debe ser un email válido.'),
    body('username')
    .trim().notEmpty().withMessage('El campo { username } no debe estar vacio.')
    .isString().withMessage('El campo { username } debe ser un string.'),
  body('password')
    .isStrongPassword().withMessage('El campo { password } debe tener al menos 8 caracteres y debe contener al menos una letra minúcula, una mayúscula y un caracter especial')
    .notEmpty().withMessage('El campo { password } no debe estar vacio.')
    .isString().withMessage('El campo { password } debe ser un string.'),
  applyValidations,
];

export const loginUserValidations = [
  body('email')
    .trim().notEmpty().withMessage('El campo { email } no debe estar vacio.')
    .isEmail().withMessage('El campo { email } debe ser un email válido.'),
  body('password')
    .notEmpty().withMessage('El campo { password } no debe estar vacio.')
    .isString().withMessage('El campo { password } debe ser un string.'),
  applyValidations,
];

export const updateUserValidations = [
  body('avatarURL')
    .optional()
    .notEmpty().withMessage('El campo { avatarURL } no debe estar vacio.')
    .isString().withMessage('El campo { avatarURL } debe ser un string.')
    .isURL().withMessage('El campo { avatarURL } debe ser una URL válida.'),
  body('email')
    .optional()
    .trim().notEmpty().withMessage('El campo { email } no debe estar vacio.')
    .isEmail().withMessage('El campo { email } debe ser un email válido.'),
  body('username')
    .optional()
    .trim().notEmpty().withMessage('El campo { username } no debe estar vacio.')
    .isString().withMessage('El campo { username } debe ser un string.'),
  body('password')
    .optional()
    .isStrongPassword().withMessage('El campo { password } debe tener al menos 8 caracteres y debe contener al menos una letra minúcula, una mayúscula y un caracter especial')
    .notEmpty().withMessage('El campo { password } no debe estar vacio.')
    .isString().withMessage('El campo { password } debe ser un string.'),
  applyValidations,
];