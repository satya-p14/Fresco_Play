let singlePatientAppointments = require('../models/appointments');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').MongoClient;

module.exports = function (req, res) {
  /*write your code here*/
  singlePatientAppointments.remove(req.body._id); ((err, resp) => {
    if (err) return res.status(401).json(err);
    return res.status(200).json({
      status: 'success'
    });;
  });
}
