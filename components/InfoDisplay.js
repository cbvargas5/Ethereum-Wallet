import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const InfoDisplay = props => {
  return props.isLoading
  ?
  (
    <View style={styles.container}>
      <Text style={styles.text}>{props.type}</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>---LOADING WALLET---</Text>
      </View>
    </View>
  )
  :
  (
    <View style={styles.container}>
      <Text style={styles.text}>{props.type}</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{props.value}</Text>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  contentContainer: {
    padding: 6,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#40cbac',
    elevation: 5,
    shadowOffset: {width: 1, height: 2},
    shadowColor: '#333',
    shadowOpacity: 0.5,
    alignItems: 'center',
  },
  content: {
    color: '#f9f9f9',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default InfoDisplay;
