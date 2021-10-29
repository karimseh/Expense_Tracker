import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    
    const  {addTransaction, transactions} = useContext(GlobalContext);
    const handleAddTransaction = (e)=>{
      e.preventDefault();
      const newTransaction ={
        id : transactions.length+1,
        text,
        amount :parseFloat(amount)
      }
      addTransaction(newTransaction)
    }

    return (
        <>
          <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleAddTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  placeholder="Enter text..."  value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number"  placeholder="Enter amount..." value={amount}
           onChange={(e)=>{setAmount(e.target.value)}} />
        </div>
        <button className="btn" type="submit" >Add transaction</button>
      </form>   
        </>
    )
}
