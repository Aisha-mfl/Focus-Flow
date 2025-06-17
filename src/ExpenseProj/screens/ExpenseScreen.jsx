import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Error from '../components/ui/Error'
import Loading from '../components/ui/Loading'
import { getDateMinusDays } from '../../utils/date'
import ExpensesOutput from '../components/Expenses/ExpensesOutput'
import { fetchExpenses } from '../../utils/http'
import { setExpenses } from '../../store/Expense-store'


const ExpenseScreen = () => {
  const [isFetching, setisFetching] = useState(true);
  const [error, setError] = useState();
  const expenses = useSelector(state => state.expensesReducer.ids);
  console.log(expenses);
  
  // const [fetchedExpenses , setFetchedExpenses]=useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getExpenses = async () => {
      setisFetching(true);
      try {
        const expense = await fetchExpenses();
        console.log(expense);
        dispatch(setExpenses(expense));
      }
      catch (error) {
        setError('Could not Fetch expenses!');
      }
      // setFetchedExpenses(expense);
      setisFetching(false);
    }
    getExpenses();
  }, []);

  const errorhandler = () => {
    setError(null);
  }

  if (error && !isFetching) {
    return <Error messege={error} onConfirm={errorhandler} />
  }

  if (isFetching) {
    return <Loading />
  }



  const recentExpense = expenses.filter((expense) => {
    const today = new Date();
    const date7Days = getDateMinusDays(today, 7);


    return (expense.date >= date7Days) && (expense.date <= today);
  }
  );
  return (
    <ExpensesOutput
      expenses={recentExpense}
      expensesPeriod='last 7 days'
      fallback='No expenses Registered for the last 7 days. ' />
  )
}

export default ExpenseScreen;

const styles = StyleSheet.create({

});