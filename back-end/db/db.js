const mongoose = require('mongoose')
// const connectionString = 'mongodb://127.0.0.1:27017/note-app'
const connectionString = process.env.mongoURI

const runDB = () => {
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(_ => console.log(`connection is running...`))
}

module.exports = runDB