import  {createContext, useReducer, useEffect} from "react";
import AppReducer from './AppReducer';
const savedTransactions = JSON.parse(localStorage.getItem('transactions'));


const initialState = {
    transactions : savedTransactions || []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        console.log(state.transactions)
        localStorage.setItem('transactions',JSON.stringify(state.transactions))

    }, [state.transactions])

    function deleteTransaction(transactionId){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: transactionId
        })

    }
    function addTransaction(transaction){
        dispatch({ type: "ADD_TRANSACTION", payload: transaction})
    }
    return (

    <GlobalContext.Provider value={{
        transactions : state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    );
}