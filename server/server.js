import e from "express";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";
import transactions from "./routes/transactions.js";
import connectDB from "./db/db.js";
import cors from "cors";

// Manually define __dirname in ESM
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: "./config/config.env" });
import "colors";
const app = e();

const PORT = process.env.PORT || 3000;

connectDB();

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(cors({
    origin: ["https://expensetracker-ashy-two.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(e.json());
app.use('/api/v1/transactions', transactions);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT.black} and is on ${process.env.NODE_ENV.blue}`);
});
