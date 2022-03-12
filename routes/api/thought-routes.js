const router = require('express').Router();
const {
  getAllThoughts,
  getOneThought,
  addThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts);

router.route('/:userId').post(addThought);

router
  .route('/:userId/:thoughtId')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
