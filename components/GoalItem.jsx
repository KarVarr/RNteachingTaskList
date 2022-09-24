import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        android_ripple={{ color: 'red' }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
    color: 'red',
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});
