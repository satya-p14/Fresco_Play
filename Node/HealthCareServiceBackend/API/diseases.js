let diseases = require('../models/diseases');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').MongoClient;

module.exports = function (req, res) {
  /*write your code here*/
  Diseases.find((err, diseases) => {
    if (err) return res.status(401).json(err);
    return res.json(diseases);
  });
}
