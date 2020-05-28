import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GenerateButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: '60%',
    borderRadius: 7,
    backgroundColor: '#f9f9f9',
    padding: 8,
    elevation: 5,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: '#333',
    shadowOpacity: 0.5,
    alignItems: 'center',
    marginTop: 50
  },
  text: {
    color: '#19bd9b',
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default GenerateButton