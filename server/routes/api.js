const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

mongoose.connect('mongodb://localhost:27017/mean');

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  position: String,
  biography: String
});

const User = mongoose.model('User', userSchema);

const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

// Get api listing
router.get('/', (req, res) => {
  res.send('api works');
});

// Create a demo api with a json mock
router.get('/posts', (req, res) => {
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Create API for tv character and retrieve list.
router.get('/users', (req, res) => {
    User.find({}, ( err, allUsers ) => {
      if ( err ) {
        console.log('There was an error');
      } else {
        res.json(allUsers);
      }
    });
});

router.post('/users', (req, res) => {
    let name = req.body.name;
    let lastname = req.body.lastname;
    let position = req.body.position;
    let biography = req.body.biography;
    let newUser = { name, lastname, position, biography };

    User.create(newUser, (err, usr) => {
      if ( err ) {
        res.json({ message: err });
      } else {
        console.log(newUser);
        res.json({ message: 'character created' });
      }
    });
});

router.delete('/users/:user_id', (req, res) => {
  User.remove({ _id: req.params.user_id }, (err, user) => {
    if ( err ) {
      console.log('There was an error');
    } else {
      res.json({ message: 'character deleted' });
    }
  });

});

module.exports = router;
