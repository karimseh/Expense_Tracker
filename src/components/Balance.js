import React, {useContext} from 'react'
import {GlobalContext}  from '../context/GlobalState'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    let total = 0.00;
    [...transactions].map((transaction)=>{
        total += transaction.amount;
    })
    return (
        <>
        <h4>Your Balance</h4>
        <h1>${total.toFixed(2)}</h1>  
        </>
    )
}
