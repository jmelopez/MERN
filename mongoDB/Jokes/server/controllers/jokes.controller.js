const Joke = require('../models/jokes.models');

module.exports.getAllJokes = (req,res) => {
    Joke.find()
        .then(( allJokes ) => {
            res.json({ jokes: allJokes })
        })
        .catch(( err ) => {
            res.json({ message: 'Something went wrong ', error: err })
        });
}

module.exports.findAJoke = (req,res) => {
    Joke.findOne( {_id: req.params._id} )
        .then((oneJoke) => res.json( oneJoke ))
        .catch(( err ) => {
            res.json({ message: 'Something went wrong ', error: err })
        });
}

module.exports.createNewJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ joke: newJoke })
        })
        .catch(( err ) => {
            res.json({ message: 'Something went wrong ', error: err })
        });
}

module.exports.updateAJoke = (req, res) => {
    Joke.findOneAndUpdate( 
        { _id: req.params._id} , 
        req.body, 
        {new: true, runValidators: true}
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch(( err ) => {
            res.json({ message: 'Something went wrong ', error: err })
        });
}

module.exports.deleteAJoke = (req, res) => {
    Joke.deleteOne( {_id: req.params._id })
        .then( result => {
            res.json({ result: result })
        })
        .catch(( err ) => {
            res.json({ message: 'Something went wrong ', error: err })
        });
}