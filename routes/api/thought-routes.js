const router = require('express').Router();
const {
  getAllThoughts,
  getOneThought,
  addThought,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts);

router.route('/:userId').post(addThought);

router.route('/:id').get(getOneThought);

module.exports = router;
