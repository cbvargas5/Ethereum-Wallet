import './shim.js'
import React, { useState, useEffect, useCallback } from 'react';
import Card from './components/Card';
import InfoDisplay from './components/InfoDisplay';
import GenerateButton from './components/GenerateButton';
import {StyleSheet, Text, View, AsyncStorage } from 'react-native';
import wallet from 'eth-wallet-light';
// import AsyncStorage from '@react-native-community/async-storage';
// import { generateSecureRandom } from 'react-native-securerandom';


const App = props => {

  const [privateKey, setPrivateKey] = useState('')
  const [publicAddress, setPublicAddress] = useState('')

  const password = 'will change later'

  useEffect(() => {

    AsyncStorage.getItem('Mnemonic')
      .then((value) => {
        if (!value) {
          new wallet.Keystore().initializeFromEntropy('entropy', password)
            .then(async (keystore) => {
              setPublicAddress(keystore.getAddress())
              setPrivateKey(keystore.getPrivateKey(password))
              await AsyncStorage.setItem('Mnemonic', keystore.getMnemonic(password))
            })
        } else {
          new wallet.Keystore().restoreFromMnemonic(value, password)
            .then(async (keystore) => {
              setPublicAddress(keystore.getAddress())
              setPrivateKey(keystore.getPrivateKey(password))
            })
        }
      })

  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ethereum Wallet</Text>
      <Card>
        <View>
          <InfoDisplay
            type="Ethereum Address"
            value={publicAddress}
          />
          {/* <InfoDisplay
            type="Public Address"
            value={publicAddress}
          /> */}
          <InfoDisplay
            type="Private Key"
            value={privateKey}
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
