import { check } from "express-validator";

export const loginValidation = () =>[
    check('email').notEmpty().isEmail().isString(),
    check('password').notEmpty().isLength({min: 8})
]

export const signinValidation = () =>[
    check('name').notEmpty().isString(),
    check('email').notEmpty().isEmail(),
    check('password').notEmpty().isLength({min: 8})
]

export const updateUserValidation = () =>[
    check('id').isUUID().notEmpty(),
    check('name').notEmpty().isString(),
    check('email').notEmpty().isEmail()
]