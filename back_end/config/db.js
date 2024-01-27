const mongoose = require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGOODB_URI)
        console.log(`success connect to mongodb`)
    } catch (error) {
        console.log(`error connect to mongodb ${error}`)
    }
}

module.exports = connectDB