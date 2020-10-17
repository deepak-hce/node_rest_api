const express = require('express');
const SuccessResponse = require('./helpers/SuccessResponse');


const router = express.Router();



router.get('/health-check', (req, res) => {
    res.json(new SuccessResponse('Heath Ok response from express server.'));
})

module.exports = router;