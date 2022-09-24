import {
  TextInput,
  StyleSheet,
  Button,
  View,
  Modal,
  Image,
} from 'react-native';
import React, { useState } from 'react';

export default function GoalInput({ value, onAddGoal, visible, onCancel }) {
  const [enteredGoalText, setEneteredGoalText] = useState('');

  function goalINputHandler(entredText) {
    setEneteredGoalText(entredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEneteredGoalText('');
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal !'
          onChangeText={goalINputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#5ecc' />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
    paddingRight: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '90%',
    paddingHorizontal: 20,
    padding: 7,
    borderRadius: 30,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
