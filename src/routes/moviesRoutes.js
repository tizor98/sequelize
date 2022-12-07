const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.list);

router.get('/new', moviesController.new);

router.get('/recommended', moviesController.recomended);

router.get('/detail/:id', moviesController.detail);

router.get('/edit/:id', moviesController.edit);

router.put('/edit/:id', moviesController.update);

router.get('/delete/:id', moviesController.delete);

router.delete('/delete/:id', moviesController.destroy);

router.get('/add', moviesController.add);

router.post('/add', moviesController.create);

module.exports = router;