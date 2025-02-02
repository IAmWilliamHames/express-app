const bootcampService = require('./service.js')

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await bootcampService.getBootcamps()
    res.json(bootcamps);
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err
    })
  }
}

// @desc    Get bootcamp by id
// @route   GET /api/v1/bootcamps:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    bootcamp = await bootcampService.getBootcampById(req.params.id)
    res.json(bootcamp);
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err
    })
  }
  
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await bootcampService.createBootcamp(req.body)
    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err
    })
  }
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await bootcampService.updateBootcampById(req.params.id, req.body)
    res.json({
      success: true,
      data: bootcamp
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err
    })
  }
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
   try {
    const bootcamp = await bootcampService.deleteBootcampById(req.params.id)
    res.json(bootcamp)
   } catch (err) {
    res.status(400).json({
      success: false,
      error: err
    })
   }
}