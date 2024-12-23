import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      Alert.alert('Warning', 'Cannot decrement below 0!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Counter App</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Increment"
          onPress={() => {
            setCount(count + 1);
          }}
        />
        <Button title="Decrement" onPress={() => handleDecrement()} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
