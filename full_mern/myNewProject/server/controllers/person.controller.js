const Person = require('../models/person.model');

module.exports.index = (req, res) => {
    res.json({
        message: 'Hello World'
    });
}

module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(person => res.json(person))
        .catch(err => res.json(err));
}

module.exports.getAllPeople = (req, res) => {
    Person.find({})
        .then(persons => {
            console.log(persons);
            res.json(persons)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

module.exports.getPerson = (req, res) => {
    Person.findOne({ _id: req.params.id })
        .then(person => res.json(person))
        .catch(err => res.json(err));
}

//update person
module.exports.updatePerson = (req, res) => {
    Person.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new: true})
            .then(updatedPerson => res.json(updatedPerson))
            .catch(err => res.json(err))
}

//delete person
module.exports.deletePerson = (req, res) => {
    Person.findByIdAndDelete(req.params.id)
        .then(deleteconfirm => res.json(deleteconfirm))
        .catch(err => res.json(err))
}