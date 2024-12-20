import e from "express";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";
import transactions from "./routes/transactions.js";
import connectDB from "./db/db.js";
import cors from "cors"

dotenv.config({ path: "./config/config.env" });
import "colors"
const app = e();

const PORT = process.env.PORT || 3000;


connectDB()


if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
}

app.use(cors({
    origin: ["https://expensetracker-plum.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(e.json())
app.use('/api/v1/transactions',transactions)

if(process.env.NODE_ENV === 'production'){
    app.use(e.static('client/dist'))

    app.get('*',(req,res)=>{res.sendFile(path.resolve(__dirname,'client','dist','index.html'))})
}


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT.black} and is on ${process.env.NODE_ENV.blue}`)
})