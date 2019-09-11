const express = require('express');
const router = express.Router();
const serieController = require('../app/api/controllers/series');

router.get('/', serieController.getAll);
router.post('/', serieController.create);
router.get('/:serieId', serieController.getById);
router.put('/:serieId', serieController.updateById);
router.delete('/:serieId', serieController.deleteById);

module.exports = router;