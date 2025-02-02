const model = require('./model.js')

exports.getBootcamps = async () => {
  const records = await model.find()
  return records
}

exports.getBootcampById = async (id) => {
  const record = await model.findById(id)
  return record
}

exports.createBootcamp = async (bootcamp) => {
  const record = await model.create(bootcamp)
  return record
}

exports.updateBootcampById = async(id, body) => {
  const record = await model.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true
  })
  return record
}

exports.deleteBootcampById = async (id) => {
  record = await model.findByIdAndDelete(id)
  return record
}