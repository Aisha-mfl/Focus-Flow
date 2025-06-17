import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';

const AllExpense = () => {
    // const expenseCtx = useContext(ExpenseContext);
    const expenses = useSelector(state => state.expensesReducer.ids);
    console.log('expenses: ',expenses);

    return (
        <ExpensesOutput expenses={expenses} expensesPeriod={"Total"} fallback='No registeres expenses found! ' />

    )
}

export default AllExpense;

const styles = StyleSheet.create({})