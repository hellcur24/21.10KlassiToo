const express = require('express');
const itemsController = require('../controllers/workItems');
const router = express.Router();

router.get('/work', itemsController.getMainPageWork);
router.post('/work', itemsController.postNewWork);
router.post('/deleteWork', itemsController.deletWorkItem);

module.exports = router;