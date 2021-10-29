import React, {useContext} from 'react'
import {GlobalContext}  from '../context/GlobalState'

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    let income = 0;
    let expense = 0;
    [...transactions].map((transaction)=>{
       transaction.amount > 0 ? income+= transaction.amount : expense+= transaction.amount;
    })
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p  className="money plus">+${income.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(expense.toFixed(2))}</p>
            </div>
        </div>
    )
}
