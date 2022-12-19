const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/product', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established connection with database'))
    .catch( err => console.log('Something went wrong with database connection ', err));