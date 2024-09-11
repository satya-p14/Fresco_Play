const express = require("express");
//setting up the cars router
const carsRouter = express.Router();
//write your code for the endpoints here
carsRouter.post("/cars", async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message:"Save failed"
    });    
  }  
})

//exporting the router
module.exports = carsRouter;
