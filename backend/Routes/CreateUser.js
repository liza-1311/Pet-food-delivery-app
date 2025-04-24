const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

// Route to create a user
router.post("/createuser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    console.log("POST /createuser hit");

    try {
        await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location // Make sure location is provided in the request
        });
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to create user" });
    }
});

// Route to login a user
router.post("/loginuser", async (req, res) => {
    const { email, password } = req.body;

    try {
        let userData = await User.findOne({ email }); // Correct query syntax
        if (!userData) {
            return res.status(400).json({ error: "Try logging in with correct credentials" });
        }

        // Check password
        if (password !== userData.password) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        // If login is successful
        res.json({ success: true, message: "Login successful!" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

module.exports = router;
