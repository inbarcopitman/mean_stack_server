const express = require('express');
const bl = require('../BL/usersBL');

const router = express.Router();


router.get('/', async function (req, next) {
    let users = await bl.getAllUsers();
    return next.json(users);
});

router.get('/:id', async function (req, next) {
    let id = req.params.id
    let user = await bl.getUsers(id);
    return next.json(user);
});

router.post('/', async function (req, next) {
    let obj = req.body;
    let status = await bl.createUsers(obj);
    return next.json(status);
});

router.put('/:id', async function (req, next) {
    let obj = req.body;
    let id = req.params.id;

    let status = await bl.updateUsers(id,obj);
    return next.json(status);
});

router.delete('/:id', async function (req, next) {

    let id = req.params.id;

    let status = await bl.deletUsers(id);

    return next.json(status);
});

module.exports = router;
