var express = require('express');
var router = express.Router();
const controller = require("../controllers/item.controller");

router.get('/', controller.getItems);
router.post('/', controller.postItem);
router.get('/public', controller.getItemsByState);
router.get('/:id', controller.getItem);
router.patch('/:id', controller.patchItem);
router.delete('/:id', controller.deleteItem);

module.exports = router;