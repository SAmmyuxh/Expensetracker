import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,'Please input the text']
    },
    amount:{
        type:Number,
        required:[true,'Please add a +ve or a -ve no']
    }
},{timestamps:true})

export const Transaction = mongoose.model("Transaction",TransactionSchema)