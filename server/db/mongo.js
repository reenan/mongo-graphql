const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/people'


export default async () => {
  return mongoose.connect(url, { useNewUrlParser: true })
}