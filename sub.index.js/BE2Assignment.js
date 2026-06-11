const { initializeDatabase } = require("../db/db.connect");

const Car = require("../mongoose-models/car.model");

initializeDatabase();

// CREATE CAR
async function createCar(newCarData) {
  try {
    const car = new Car(newCarData);
    const savedCar = await car.save();

    console.log("New Car Added:", savedCar);
  } catch (error) {
    console.error("Error creating car:", error);
  }
}

// READ ALL CARS
async function readAllCars() {
  try {
    const allCars = await Car.find();

    console.log("All Cars:");
    console.log(allCars);
  } catch (error) {
    console.error("Error reading cars:", error);
  }
}

// READ CARS BY BRAND
async function readCarsByBrand(carBrand) {
  try {
    const cars = await Car.find({ brand: carBrand });

    console.log(`Cars by brand ${carBrand}:`);
    console.log(cars);
  } catch (error) {
    console.error("Error reading cars by brand:", error);
  }
}

// READ CARS BY COLOR
async function readCarsByColor(carColor) {
  try {
    const cars = await Car.find({ color: carColor });

    console.log(`Cars with color ${carColor}:`);
    console.log(cars);
  } catch (error) {
    console.error("Error reading cars by color:", error);
  }
}

// UPDATE PRICE BY MODEL
async function updatePriceByModel(modelName, newPrice) {
  try {
    const updatedCar = await Car.findOneAndUpdate(
      { model: modelName },
      { price: newPrice },
      { new: true }
    );

    console.log("Updated Car Price:");
    console.log(updatedCar);
  } catch (error) {
    console.error("Error updating car price:", error);
  }
}

// UPDATE CONDITION BY MODEL
async function updateConditionByModel(modelName, newCondition) {
  try {
    const updatedCar = await Car.findOneAndUpdate(
      { model: modelName },
      { condition: newCondition },
      { new: true }
    );

    console.log("Updated Car Condition:");
    console.log(updatedCar);
  } catch (error) {
    console.error("Error updating car condition:", error);
  }
}

// DELETE CAR BY ID
async function deleteCarById(carId) {
  try {
    const deletedCar = await Car.findByIdAndDelete(carId);

    console.log("Deleted Car:");
    console.log(deletedCar);
  } catch (error) {
    console.error("Error deleting car:", error);
  }
}

// DELETE CAR BY BODY STYLE
async function deleteCarByBodyStyle(bodyStyle) {
  try {
    const deletedCar = await Car.findOneAndDelete({
      bodyStyle: bodyStyle,
    });

    console.log("Deleted Car:");
    console.log(deletedCar);
  } catch (error) {
    console.error("Error deleting car by body style:", error);
  }
}



const carData1 = {
  brand: "Ford",
  model: "Mustang",
  year: 2019,
  bodyStyle: "Convertible",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "5.0L V8",
  mileage: 25000,
  color: "Red",
  price: 3500000,
  condition: "Used",
  description:
    "Exciting Ford Mustang convertible with powerful V8 engine.",
  photos: [
    "https://example.com/mustang-photo1.jpg",
    "https://example.com/mustang-photo2.jpg",
    "https://example.com/mustang-photo3.jpg",
  ],
};


const carData2 = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description:
    "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg",
  ],
};


// CREATE
// createCar(carData1);
// createCar(carData2);

// READ
// readAllCars();
// readCarsByBrand("Ford");
// readCarsByColor("Black");

// UPDATE
// updatePriceByModel("Corolla", 2300000);
// updateConditionByModel("Model S", "Used");

// DELETE
// deleteCarById("PUT_TESLA_CAR_ID_HERE");
// deleteCarByBodyStyle("Coupe");