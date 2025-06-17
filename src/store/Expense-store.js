import {createSlice} from '@reduxjs/toolkit';

const ExpenseSlice = createSlice({
  name: 'Expense',
  initialState: {
    ids: [],
  },
  reducers: {
    addExpense: (state, action) => {
      state.ids.push(action.payload);
    },
    updateExpense: (state, action) => {
      const {id, data} = action.payload;
      const index = state.ids.findIndex(exp => exp.id === id);
      if (index !== -1) {
        state.ids[index] = {...state.ids[index], ...data};
      }
    },
    setExpenses: (state, action) => {
      state.ids = action.payload.reverse();
    },
    removeExpense: (state, action) => {
      state.ids = state.ids.filter(exp => exp.id !== action.payload);
    },
  },
});
export const addExpense = ExpenseSlice.actions.addExpense;
export const updateExpense = ExpenseSlice.actions.updateExpense;
export const removeExpense = ExpenseSlice.actions.removeExpense;
export const setExpenses = ExpenseSlice.actions.setExpenses;
export default ExpenseSlice.reducer;
