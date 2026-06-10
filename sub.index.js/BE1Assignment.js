const { initializeDatabase } = require("../db/db.connect.js");
const fs = require("fs");
const path = require("path");

const filename = path.join(
  __dirname,
  "../mongoose-models",
  "BE1Assignment",
  "BE1Assignment.json"
);

console.log(filename);

const Car = require("../mongoose-models/BE1Assignment/BE1Assignment.model.js");

initializeDatabase();

const jsonData = fs.readFileSync(filename, "utf-8");

const carsData = JSON.parse(jsonData);

async function seedData() {
  try {
    for (const carData of carsData) {
      const newCar = new Car({
        brand: carData.brand,
        model: carData.model,
        year: carData.year,
        bodyStyle: carData.bodyStyle,
        fuelType: carData.fuelType,
        transmission: carData.transmission,
        engine: carData.engine,
        mileage: carData.mileage,
        color: carData.color,
        price: carData.price,
        condition: carData.condition,
        description: carData.description,
        photos: carData.photos,
        inMarket: carData.inMarket,
      });

      await newCar.save();

      console.log(
        `${newCar.brand} ${newCar.model} (${newCar.year}) saved`
      );
    }

    console.log("Cars seeded successfully.");
  } catch (error) {
    console.log("Error seeding data:", error);
  }
}

seedData();