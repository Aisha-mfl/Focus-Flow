import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const url = 'https://expense-tracker-71bde-default-rtdb.firebaseio.com';

export const storeExpense = async expenseData => {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.post(url + `/expenses.json?auth=`+token, expenseData);
  const id = response.data.name;
  return id;
};

export const fetchExpenses = async () => {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.get(url + `/expenses.json?auth=`+token);
  const expenses = [];
  console.log(response.data);
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};

export const updateExpenses = async (id, expenseData) => {
   const token = await AsyncStorage.getItem('token');
  return axios.put(url + `/expenses/${id}.json?auth=`+token, expenseData);
};
export const deleteExpense = async (id) => {
   const token = await AsyncStorage.getItem('token');
  return axios.delete(url + `/expenses/${id}.json?auth=`+token);
};
