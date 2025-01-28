var express = require('express');
var router = express.Router();

/* GET all bootcamps */
router.get('/', function(req, res, next) {
  res.json({ message: "Show all bootcamps" });
});

/* POST all bootcamps */
router.post('/', function(req, res, next) {
  res.json({ message: "Create new bootcamp" });
});

/* Put update bootcamp by {id} */
router.put('/:id', function(req, res, next) {
  res.json({ message: `Update bootcamp by id: ${req.params.id}` });
});

/* GET bootcamp by {id} */
router.get('/:id', function(req, res, next) {
  res.json({ message: `Get bootcamp by id: ${req.params.id}` });
});

/* DELETE bootcamp by {id} */
router.delete('/:id', function(req, res, next) {
  res.json({ message: `Delete bootcamp by id: ${req.params.id}` });
});



module.exports = router;