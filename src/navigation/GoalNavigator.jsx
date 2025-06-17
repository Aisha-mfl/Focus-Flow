import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, StatusBar } from 'react-native';
import GoalInput from '../screens/goal/goalInput';
import GoalItem from '../screens/goal/GoalItem';

const GoalNavigator = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);

  };

  const addGoalHandler = (enterGoalText) => {
    //updating state
    setCourseGoals(currCourseGoals => [...currCourseGoals,
    { text: enterGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler(false);
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);

  };
  const deleteGoal = (id) => {
    setCourseGoals(currCourseGoals => {
      return currCourseGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#102E50"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />

        <View>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text}
                id={itemData.item.id}
                onDelete={deleteGoal}
              />;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 15,
    marginTop: 40,
  },



});

export default GoalNavigator;
