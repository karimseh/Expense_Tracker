import React, {useContext}from 'react';
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
    const {deleteTransaction} = useContext(GlobalContext);
    let sign = transaction.amount > 0 ? '+' : '-';
    let className = transaction.amount > 0 ? 'plus' : 'minus';
    return (
        <li className={className}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" 
        onClick={()=>{deleteTransaction(transaction.id)}}>x</button>
          </li>
    )
}
