const express = require("express");
//setting up the cars router
const carsRouter = express.Router();
//write your code for the endpoints here
carsRouter.post("/cars", async (req, res) => {
  const carObj = {
    _id : new mongoose.Types.ObjectId(),
    name: 'New Car',
    price: 2040000,
    capacity: 5,
    type: 'Sedan',
    manufacturer: 'Hundai'
  };
  await cars.save()
  res.status(201).send(cars);
})

//exporting the router
module.exports = carsRouter;
