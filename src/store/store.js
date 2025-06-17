import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './auth-store';
import ExpenseReducer from './Expense-store';
import favoritesReducer from './favorites';
import placesReducer from './place-store';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    expensesReducer: ExpenseReducer,
    favMeals: favoritesReducer,
    places: placesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
