const express = require("express");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    if (cars) {
      res.status(200).json(cars);
    };
  } catch (err) {
    res.status(500).json({
      message: "There was a server error fulfilling your request"
    });
  };
});

router.get("/:id", async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const car = await db("cars").where({
      id
    });
    if (car) {
      res.status(200).json(car);
    } else {
      res.status(400).json({
        message: `Car with id '${id}' does not exist`
      });
    };
  } catch (err) {
    res.status(500).json({
      message: "There was a server error fulfilling your request"
    });
  };
});

router.post("/", async (req, res) => {
  const newCar = req.body;
  try {
    const addCar = await db("cars").insert(newCar);

    if (addCar) {
      res.status(201).json(newCar);
    } else {
      res.status(500).json({
        message: "There was a server error fulfilling your request"
      });
    };
  } catch (err) {
    res.status(404).json({
      message: "Please include VIN, make, model, year, and mileage in the request body"
    });
  };
});

router.delete("/:id", async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const deleteCar = await db("cars").where({
      id
    }).del();

    if (deleteCar) {
      res.status(200).json(deleteCar);
    } else {
      res.status(400).json({
        message: `Car with id ${id} does not exist`
      });
    };
  } catch (err) {
    res.status(500).json({
      message: "There was a server error fulfilling your request"
    });
  };
});

router.put("/:id", async (req, res) => {
  const {
    id
  } = req.params;
  const edit = req.body;
  try {
    const updateCar = await db("cars").update(edit).where({
      id
    });

    if (updateCar) {
      res.status(201).json(updateCar);
    } else {
      res.status(400).json({
        message: `Car with id '${id}' does not exist`
      });
    };
  } catch (err) {
    res.status(500).json({
      message: "There was a server error fulfilling your request"
    });
  };
});

module.exports = router;