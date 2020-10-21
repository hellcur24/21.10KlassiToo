const express = require('express');
const itemsController = require('../controllers/workItems');
const router = express.Router();

router.get('/work', itemsController.getMainPageWork);
router.post('/work', itemsController.postNewWork);

module.exports = router;