import './shim.js'
import crypto from 'crypto'
import React from 'react';
import Card from './components/Card';
import InfoDisplay from './components/InfoDisplay';
import GenerateButton from './components/GenerateButton';
import {StyleSheet, Text, View} from 'react-native';
import wallet from 'eth-wallet-light'
// const wallet = require('eth-wallet-light')

const App = props => {
  // console.log(crypto.randomBytes(32).toString('hex'))
  // const test = new wallet.Keystore()
  // console.log(test)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ethereum Wallet</Text>
      <Card>
        <View>
          <InfoDisplay
            type="Ethereum Address"
            value={'ghsdfkgjh345i3h463ikjbn1234'}
          />
          <InfoDisplay
            type="Public Key"
            value={'09drgjhd0f9gjd0f9g8jd0f9h8s'}
          />
          <InfoDisplay
            type="Private Key"
            value={'98fshs8dr7ghs0dh8sf089jhwy'}
          />
        </View>
      </Card>
      <GenerateButton>Generate New Wallet</GenerateButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62d7ba',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#f9f9f9',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 55,
    textShadowColor: '#333',
    textShadowOffset: {width: 0, height: 5},
    textShadowRadius: 5,
  },
});
export default App;
