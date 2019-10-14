import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <Button title='Add' onPress={addGoalHandler} />
      </View>
      {/* <ScrollView>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}

      <FlatList data={courseGoals} renderItem={itemData => (
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
        </View>
      )} />
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }

});
