import { body, param } from 'express-validator';
import { applyValidations } from '../../middlewares/applyValidations.js';

export const createCommentValidations = [
  param('postId')
    .notEmpty().withMessage('El parametro { postId } no debe estar vacio.')
    .isString().withMessage('El parametro { postId } debe ser un string.'),
  body('description')
    .notEmpty().withMessage('El campo { name } no debe estar vacio.')
    .isString().withMessage('El campo { name } debe ser un string.'),
  applyValidations,
];

export const getAllCommentsValidations = [
  param('postId')
    .notEmpty().withMessage('El parametro { postId } no debe estar vacio.')
    .isString().withMessage('El parametro { postId } debe ser un string.'),
  applyValidations,
];

export const getOneCommentValidations = [
  param('postId')
    .notEmpty().withMessage('El parametro { postId } no debe estar vacio.')
    .isString().withMessage('El parametro { postId } debe ser un string.'),
  param('commentId')
    .notEmpty().withMessage('El parametro { commentId } no debe estar vacio.')
    .isString().withMessage('El parametro { commentId } debe ser un string.'),
  applyValidations,
];

export const updateCommentValidations = [
  param('postId')
    .notEmpty().withMessage('El parametro { postId } no debe estar vacio.')
    .isString().withMessage('El parametro { postId } debe ser un string.'),
  param('commentId')
    .notEmpty().withMessage('El parametro { commentId } no debe estar vacio.')
    .isString().withMessage('El parametro { commentId } debe ser un string.'),
  body('description')
    .optional()
    .notEmpty().withMessage('El campo { name } no debe estar vacio.')
    .isString().withMessage('El campo { name } debe ser un string.'),
  applyValidations,
];