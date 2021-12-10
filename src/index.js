import express from "express";
import dotenv from 'dotenv';
import connectDB from "./services/mongodb/connectDB";
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import categoryRoutes from './routes/categoryRoutes';
import productRoutes from './routes/productRoutes';

dotenv.config()


const app = express()
const port = process.env.PORT || 3003

connectDB()

app.use(cors())
app.use(express.json())


// route to handle auth request 
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)



app.get('/',(req,res) =>
{
        res.send(`server Listening to  ${port}( Deployed from workflow 132 )`)
})

app.listen(port,(req,res) => {
    console.log(`server Listening to PORT ${port}`)
})
