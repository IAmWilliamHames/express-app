const ErrorResponse = require('../utils/errorResponse.js')
const asyncHandler = require('../middleware/async.js')
const bootcampService = require('./service.js')

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await bootcampService.getBootcamps()
  res.json(bootcamps);

})

// @desc    Get bootcamp by id
// @route   GET /api/v1/bootcamps:id
// @access  Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  bootcamp = await bootcampService.getBootcampById(req.params.id)
  res.json(bootcamp);
})

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await bootcampService.createBootcamp(req.body)
  res.status(201).json({
    success: true,
    data: bootcamp
  });
})

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await bootcampService.updateBootcampById(req.params.id, req.body)
  res.json({
    success: true,
    data: bootcamp
  })
})

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await bootcampService.deleteBootcampById(req.params.id)
  res.json(bootcamp)
})