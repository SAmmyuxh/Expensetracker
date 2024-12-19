import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";
import axios from "axios"
const initialState = {
    transactions:[],
    error:null,
    loading:true
}
//Create Context
export const GlobalContext = createContext(initialState)

const baseurl = import.meta.env.VITE_API_URL;




//Provide Context
//makes it available in the other components
//makes the states available in all the components
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer,initialState)
    //Actions
    async function gettransactions(){
        try {
            const res = await axios.get(`${baseurl}/api/v1/transactions`);
            dispatch({
                type:"GET_TRANSACTIONS",
                payload:res.data.data
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type:"TRANSACTION_ERROR",
                payload:error.response.data.error
            })
        }
    }



async function deletetransaction(id) {
        try {
            await axios.delete(`${baseurl}/api/v1/transactions/${id}`)
            dispatch({
                type:"DELETE_TRANSACTION",
                payload:id
            })
        } catch (error) {
            dispatch({
                type:"TRANSACTION_ERROR",
                payload:error.response.data.error
            })
        }      
    }
  async  function addtransaction(transaction){
    const config ={
        headers:{
            "Content-Type":"application/json"
        }
    }
    try {
       
     const res =   await axios.post(`${baseurl}/api/v1/transactions`,transaction,config)
     console.log(res)
        dispatch({
            type:"ADD_TRANSACTION",
            payload:res.data.data
        })
    } catch (error) {
        dispatch({
            type:"TRANSACTION_ERROR",
            payload:error.response.data.error
        })
    }
       
    }
    //to make it accesible in all the components provide transaction value here
    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        error:state.error,
        loading:state.loading,
        gettransactions,
        deletetransaction,
        addtransaction
    }}>
       {children}
    </GlobalContext.Provider>)
}