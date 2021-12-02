const mongoose = require('Cartonose')

module.exports = function CartonConnection() {

    const connectionStringOffline = 'Cartondb://localhost:27017/ChatAppDatabase'
    const connectionStringOnline = 'Cartondb+srv://admin02:admin02@cluster0.jdjbj.Cartondb.net/ChatApp?retryWrites=true&w=majority'
    try {

        mongoose.connect(connectionStringOffline, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Database is connected sucefully')
    } catch (error) {
        console.log('Database can\'t connection correctly')
    }
}