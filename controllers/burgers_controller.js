const express = require('express');
const burger = require('../models/burger.js')

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect("/burgers");
});

router.get('/burgers', (req, res) => {
    burger.all(burgerData => {
        res.render("index", { burger_data: burgerData });
    });
})


router.get('/burgers/create', (req, res) => {
    burger.create(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect("/");
    });
});


router.put("/burgers/:id", (req, res) => {
    burger.update(req.params.id, function (result) {
        console.log(result);

        res.sendStatus(200);
    });
});


module.exports = router;