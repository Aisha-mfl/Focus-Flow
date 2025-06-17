import { StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entypo from '@react-native-vector-icons/entypo';
import IconButton from '../ExpenseProj/components/ui/IconButton';
import ExpenseScreen from '../ExpenseProj/screens/ExpenseScreen';
import AllExpense from '../ExpenseProj/screens/AllExpense';
import ManageExpense from '../ExpenseProj/screens/ManageExpense';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ExpenseOverView = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ navigation }) => ({
        tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' },
        tabBarActiveTintColor: '#000000',
        tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' },
        headerStyle: { backgroundColor: '#f7b2b2cc' },
        contentStyle: { backgroundColor: '#ffefef' },
        headerRight: () => {
          return (
            <IconButton
              icon="plus"
              size={30}
              color="#8a4343"
              onPress={() => {
                navigation.navigate('MangeExpense');
              }}
            />
          );
        },
         headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginRight: 6 , padding:13}}
                onPress={() => navigation.toggleDrawer()}>
                <Entypo name="menu" size={24} color="#000000" />
              </TouchableOpacity>
            );
          },
      })}>
      <BottomTab.Screen
        name="Expense"
        component={ExpenseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="credit-card" size={size} color="#9b5050" />
          ),
          title: 'Recent Expense',
          tabBarLabel: 'Recent',
        }}
      />
      <BottomTab.Screen
        name="AllExpense"
        component={AllExpense}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color="#9b5050" />
          ),
          title: 'All Expense',
          tabBarLabel: 'All Expense',
        }}
      />
    </BottomTab.Navigator>
  );
};

const ExpenseNavigation = () => {
  return (


    <Provider store={store}>

      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#f7b2b2cc' },
          contentStyle: { backgroundColor: '#ffefef' },
        }}>
        <Stack.Screen
          name="ExpenseOverview"
          component={ExpenseOverView}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MangeExpense"
          component={ManageExpense}
          options={{
            title: 'Manage Expense',
            // presentation:'card',
            animation: 'slide_from_bottom',
          }}
        />
      </Stack.Navigator>
    </Provider>
  );
};

export default ExpenseNavigation;

const styles = StyleSheet.create({});
