import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import React, {useState} from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleMultiply = () => {
    setCount(count * 2);
  };

  const handleDivison = () => {
    setCount(count / 2);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Counter App</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button mode="elevated" onPress={handleIncrement}>
          Increment
        </Button>
        <Button mode="elevated" onPress={handleDecrement}>
          Decrement
        </Button>
        <Button mode="elevated" onPress={handleMultiply}>
          Multiply x 2
        </Button>
        <Button mode="elevated" onPress={handleDivison}>
          Divide / 2
        </Button>
        <Button mode="contained" onPress={handleReset}>
          Reset
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#e5e5e5b6',
    borderRadius: 16,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    width: '90%',
    rowGap: 16,
    columnGap: 12,
  },
});
