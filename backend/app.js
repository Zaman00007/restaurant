import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import reservationRouter from "./routes/reservationRoute.js";


const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use((err, req, res, next) => {
    console.log("Hello from middleware");
  next();
});



app.get("/", (req, res) => {
  res.json({message : "Hello! I am Backend!"});
  console.log("Hello from backend");
});

app.use("/reservations", reservationRouter);


const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO, {useNewUrlParser: true,
          useUnifiedTopology: true,
      } );
        console.log("Connected to MongoDB.")
      } catch (error) {
        console.log("Error connecting to MongoDB");
        console.log(error);
      }

};

mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB disconnected!")
})

mongoose.connection.on("connected", ()=>{
    console.log("MongoDB connected!")
})

app.listen(8800, () => {
    connect();
  console.log("Server started on port 8800");
})

