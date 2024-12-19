import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'

const Trans = ({transaction}) => {
    const sign = transaction.amount > 0 ? "+" :"-"
    const {deletetransaction} = useContext(GlobalContext)
  return (
    <li className={transaction.amount < 0 ? "minus":"plus"}>
    {transaction.text}<span>{sign}${numberWithCommas(  Math.abs(transaction.amount))}</span><button onClick={() =>{deletetransaction(transaction._id)}} className="delete-btn">x</button>
  </li> 
  )
}

export default Trans
