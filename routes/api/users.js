const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");

router.post(
    '/'
    [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'please include a valid email').isEmail,
    check(
        'password',
        'please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
    ],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        console.log(req, res)

        const { name, email, password } = req.body

        try {
            let user = await User.findOne({ email });
            console.log(user)

            if (user) {
                res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }


            user = new User({
                name,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);
            console.log(salt)
            console.log(password)

            user.password = await bcrypt.hash(password, salt);

            await user.save();
            res.send('User registered');
        } catch (err) {
            console.error(err.message);

        }
    }
)
module.exports = router;