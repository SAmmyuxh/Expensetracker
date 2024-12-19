import React,{useContext,useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'
const Balance = () => {
  //useCOntext used to provide Global Context
  const {transactions,gettransactions} = useContext(GlobalContext)
  console.log(transactions)
  useEffect(() => {
    gettransactions()
  }, [])
  
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">${numberWithCommas(total)}</h1>
    </div>
  )
}

export default Balance
