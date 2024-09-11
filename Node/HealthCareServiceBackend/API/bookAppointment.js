let appointments = require('../models/appointments');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').MongoClient;

module.exports = function (req, res) {
   /*write your code here*/
   const appointment = new Appointment({
      _id: mongoose.Types.ObjectId(),
      fname: req.body.fname,
      lname: req.body.lname,
      disease: req.body.fname,
      priority: req.body.priority,
      AppointmentDate: req.body.AppointmentDate,
      patientId: req.body.patientId,
      bookingTime: req.body.bookingTime
   });

   appointment.save((err, aptment) => {
      if (err) return res.status(400).json(err);
      return res.json(aptment);
   });
}
