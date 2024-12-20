import e  from "express";
import { addtransactions, deletetransactions, gettransactions } from "../controllers/trancontroller.js";
 const transactions = e.Router();

 transactions.get("/",gettransactions)
 transactions.post('/',addtransactions)
 transactions.delete('/:id',deletetransactions)
 export default transactions