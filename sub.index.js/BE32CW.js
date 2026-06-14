const express=require("express");
require("dotenv").config();
const app=express();

app.use(express.json())

const cars = [
  { id: 1, make: "Toyota", model: "Camry", year: 2022 },
  { id: 2, make: "Honda", model: "Civic", year: 2021 },
  { id: 3, make: "Ford", model: "Mustang", year: 2020 },
  { id: 4, make: "Chevrolet", model: "Malibu", year: 2019 },
  { id: 5, make: "Nissan", model: "Altima", year: 2023 },
  { id: 6, make: "Hyundai", model: "Elantra", year: 2022 },
  { id: 7, make: "Kia", model: "Sportage", year: 2021 },
  { id: 8, make: "BMW", model: "3 Series", year: 2020 },
  { id: 9, make: "Mercedes-Benz", model: "C-Class", year: 2023 },
  { id: 10, make: "Audi", model: "A4", year: 2022 },
  { id: 11, make: "Volkswagen", model: "Jetta", year: 2021 },
  { id: 12, make: "Tesla", model: "Model 3", year: 2023 },
  { id: 13, make: "Subaru", model: "Outback", year: 2020 },
  { id: 14, make: "Mazda", model: "CX-5", year: 2022 },
  { id: 15, make: "Lexus", model: "RX 350", year: 2021 },
  { id: 16, make: "Jeep", model: "Wrangler", year: 2023 }
];
app.get("/",(req,res)=>{
    res.send("Hello Express")

})
app.post("/cars",(req,res)=>{
    const newCar=req.body

    if(!newCar.make|| !newCar.model||!newCar.year){
        res.status(400).json({error:"Make,model and year are required."})
    }else{
        cars.push(newCar)
        res.status(201).json({messaage:"car added successfully.",car:newCar})
    }
})


app.delete("/cars",(req,res)=>{
    const carId=req.params.id
    const index=cars.findIndex((car)=>car.id==carId);
 if(index===-1){
    res.status(404).json({error:"Car Not found"})
 } else{
    cars.splice(index,1)
    res.status(200).json({message:"Car deleted Successfully"})
 }
})

// BE3.4_CW

app.post("/cars/:id",(req,res)=>{

    const carId=parseInt(req.params.id)
    const updatedCarData=req.body

    const  carToUpdate=cars.find(car=>car.id===carId);

    if(!carToUpdate){
        res.status(404).json({error:"Car not found"});
    }else{

        if(!updatedCarData.make||!updatedCarData.model||!updatedCarData.year){
            res.status(400).json({error:"Make ,model and year are required"})
        }
        else{
        Object.assign(carToUpdate,updatedCarData);
        res.status(200).json({messaage:"Car data updated successfully",car:carToUpdate});
        }
    }

})
const PORT =3000|| process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on port${PORT}`);

})