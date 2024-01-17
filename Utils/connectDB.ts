import mongoose from "mongoose"
import env from "dotenv"

env.config()


 

export const connectDB = async () => {
 mongoose.connect(process.env.DB!)
 .then(() => {
  console.log("all connected: 🚀✌💌")
 })
 .catch((error: Error) => {
  console.log(error)
 })
};