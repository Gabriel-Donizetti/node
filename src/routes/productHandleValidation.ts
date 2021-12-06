import { check } from 'express-validator'

export const createValidation = () => [
    check('name').isLength({ min: 3 }).notEmpty().isString(),
    check('price').isLength({min:1}).notEmpty().isNumeric(),
    check('category').isLength({min: 3}).notEmpty().isString(),
    check('amout').isLength({min: 1}).notEmpty().isNumeric()
]

export const updateValidation = () =>[
    check('id').isUUID().notEmpty(),
    check('name').isLength({ min: 3 }).notEmpty().isString(),
    check('price').isLength({min:1}).notEmpty().isNumeric(),
    check('product_category').isLength({min: 3}).notEmpty().isString()
]

export const incrementValidation = () =>[
    check('id').isUUID().notEmpty(),
    check('amout').isLength({min: 1}).notEmpty().isNumeric()
]

export const decrementValidation = () =>[
    check('id').isUUID().notEmpty(),
    check('amout').isLength({min: 1}).notEmpty().isNumeric()
]