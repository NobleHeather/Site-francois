const express = require('express');
const bodyParser = require('body-parser');
const Article = require('./models/article');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://NobleHeather:NHOC2021@cluster0.tupk8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.post('/api/article', (req, res, next) => {
    delete req.body._id;
    const article = new Article({
      ...req.body
    });
    article.save()
      .then(() => res.status(201).json({ message: 'Article enregistré !', article : article}))
      .catch(error => res.status(400).json({ error }));
  });

// GET
app.use('/api/article', (req, res, next) => {
Article.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
});

// GET only one
//* Possible ici de trouver via nom ?
app.get('/api/article/:id', (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
  });

// MODIFIER
//* Possible de trouver via nom ?
app.put('/api/article/:id', (req, res, next) => {
Article.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Article modifié !'}))
    .catch(error => res.status(400).json({ error }));
});

app.delete('/api/article/:id', (req, res, next) => {
    Article.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Article supprimé !'}))
      .catch(error => res.status(400).json({ error }));
});

module.exports = app;