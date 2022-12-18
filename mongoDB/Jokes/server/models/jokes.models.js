const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema( 
    {
        setup: {
            type: String,
            required: [true, 'Setup is required'],
            minlength: [3, 'Setup must be atleast 3 characters long']
        },
        punchline: {
            type: String,
            required: [true, 'The punchline is required']
        }
    },
    { timestamps: true } 
);

const Joke = mongoose.model('Joke', JokesSchema)

module.exports = Joke;