import React from 'react'
import './App.css'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpenses from './Components/IncomeExpenses'
import Transaction from './Components/Transaction'
import Addtransaction from './Components/Addtransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {

  return (
    <>
    <GlobalProvider>
     <Header/>
     <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <Transaction/>
      <Addtransaction/>
     </div>
     </GlobalProvider>
    </>
  )
}

export default App
