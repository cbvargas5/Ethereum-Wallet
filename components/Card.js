import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        {props.children}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#f9f9f9',
    shadowOffset: { width: 0, height: 5 },
    shadowColor: '#333',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    width: '90%',
  },
  content: {
    marginVertical: 50
  }
});

export default Card