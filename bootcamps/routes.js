var express = require('express');
var router = express.Router();
const { 
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
} = require('./controller.js')

/* GET all bootcamps */
router.get('/', getBootcamps);

/* GET bootcamp by {id} */
router.get('/:id', getBootcamp);

/* POST Create bootcamp */
router.post('/', createBootcamp);

/* Put update bootcamp by {id} */
router.put('/:id', updateBootcamp);

/* DELETE bootcamp by {id} */
router.delete('/:id', deleteBootcamp);



module.exports = router;