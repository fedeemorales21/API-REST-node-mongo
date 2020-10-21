const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then( db => console.log('DB coneccted') )
.catch( err => console.log(err) )