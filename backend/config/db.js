import mongoose from "mongoose";
export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://greatstack:333445@cluster0.pasxhdz.mongodb.net/fooddev').then(()=>console.log("DB connected"));

 }