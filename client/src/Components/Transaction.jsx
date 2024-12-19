import React,{useContext,useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Trans from './Trans'
const Transaction = () => {
  const {transactions,gettransactions} = useContext(GlobalContext)
  useEffect(() => {
   gettransactions()
  }, [])
  return (
   
    <>
     <h3>History</h3>
      <ul id="list" className="list">
          {transactions.map(transaction=>(
          <Trans key={transaction._id} transaction={transaction}/>
        ))}
      </ul>
    </>
  )
}

export default Transaction
