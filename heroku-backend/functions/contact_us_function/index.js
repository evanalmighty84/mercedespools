const express = require('express');
const router = express.Router();

const { createEmail } = require('./controller/createEmail');

router.post('/', createEmail);

module.exports = router;
