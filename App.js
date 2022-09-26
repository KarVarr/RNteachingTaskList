import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Text, Image } from 'react-native';


import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';





export default function App() {
  const [modalVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addINputHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.addContainer}>
        <Button
          title='Add New Goal'
          color='#5e0acc'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addINputHandler}
          visible={modalVisible}
          onCancel={endAddGoalHandler}
        />
        {courseGoals == '' ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Make a Note...</Text>
            <Image style={styles.emptyimg} source={require('./assets/images/feather.png')}  />
          </View>
        ) : (
          <View style={styles.goalsContainer}>
            <FlatList
              data={courseGoals}
              renderItem={itemData => {
                return (
                  <GoalItem
                    text={itemData.item.text}
                    onDeleteItem={deleteGoalHandler}
                    id={itemData.item.id}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: 'mediumturquoise',
    flexDirection: 'column-reverse',
  },

  goalsContainer: {
    flex: 5,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyimg: {
    width: 300,
    height: 300,
  },
  emptyText: {
    fontSize: 30,
    marginBottom: 20,
    color: 'midnightblue',
  },
});
