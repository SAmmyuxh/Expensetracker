// @desc gets al transactions
// @access public

import { Transaction } from "../Models/Transactionmodel.js"

// @route GET api/v1/transactions
export const gettransactions = async (req,res,next) => {
    try {
        const transactions = await Transaction.find();
        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:"Server Error"
        })
    }
}

// @desc POSTS a transactions
// @access public
// @route POST api/v1/transactions
export const addtransactions = async (req,res,next) => {
    try {
        const {text,amount} = req.body;

        const newtrans = await Transaction.create(req.body);

        return res.status(201).json({
            success:true,
            data:newtrans
        })
    } catch (error) {
        if(error.name === "Validation error"){
            const messages = Object.values(error.errors).map(val => val.message)

            return res.status(400).json({
                success:true,
                error:messages
            })
        }else{
            return res.status(500).json({
                success:false,
                error:"Server Error"
            })
        }
    }
}

// @desc deletes a transactions
// @access public
// @route DELETE api/v1/transactions/:id
export const deletetransactions = async (req,res,next) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);

        if(!transaction){
            return res.status(404).json({
                success:false,
                error:"No Transaction found"
            })
        }

        return res.status(200).json({
            success:true,
            data:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error.message
        })
    }
}