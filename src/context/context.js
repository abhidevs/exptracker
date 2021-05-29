import React, { useReducer, createContext } from 'react'
import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('ET_app_saved_transactions')) || [{"amount":33,"category":"Phone","type":"Expense","date":"2021-01-16","id":"a2c997f6-e5ca-4412-b996-ce795de59f68"},{"amount":60,"category":"Extra income","type":"Income","date":"2021-01-18","id":"aa98fe0a-98fe-46eb-b06f-f2559fe34d3a"},{"amount":25,"category":"Food","type":"Expense","date":"2021-01-19","id":"56f35dab-0a21-436c-bf7a-d5c0c17f3ca5"},{"amount":90,"category":"Deposits","type":"Income","date":"2021-01-25","id":"7644aa1d-fbe9-44b9-a0fb-317bdd5ff90c"},{"amount":50,"category":"Salary","type":"Income","date":"2021-01-25","id":"c00604bc-a19e-4dbc-b352-7d17f7345272"}]

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    // Action Creators
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction })

    // console.log(transactions);

    const balance = transactions.reduce((acc, currVal) => {
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    }, 0)

    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction,
            transactions,
            balance
         }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}