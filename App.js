import './shim.js'
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import InfoDisplay from './components/InfoDisplay';
import GenerateButton from './components/GenerateButton';
import { StyleSheet, Text, View, AsyncStorage, TouchableOpacity } from 'react-native';
import wallet from 'eth-wallet-light';
import { randomBytes } from 'react-native-randombytes'


const App = props => {

  const [privateKey, setPrivateKey] = useState('')
  const [publicAddress, setPublicAddress] = useState('')
  const [isReset, setIsReset] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isDisplayed, setIsDisplayed] = useState(false)

  const BULLET = '\u2022'
  const password = 'password'

  const generateNewWallet = () => {
    isLoading ? setIsLoading(false) : setIsLoading(true)
    isReset ? setIsReset(false) : setIsReset(true)
  }

  const handlePrivateDisplay = () => {
    isDisplayed ? setIsDisplayed(false) : setIsDisplayed(true)
  }

  useEffect(() => {
    AsyncStorage.getItem('Mnemonic')
      .then(async(value) => {
        if (!value || isReset) {
          const csprng = () => randomBytes(32).toString('hex')
          const entropy = await csprng()
          new wallet.Keystore(csprng).initializeFromEntropy(entropy, password)
            .then(async (keystore) => {
              setIsLoading(false)
              setPublicAddress(keystore.getAddress())
              setPrivateKey(keystore.getPrivateKey(password))
              await AsyncStorage.setItem('Mnemonic', keystore.getMnemonic(password))
              setIsReset(false)
            })
        } else {
          new wallet.Keystore().restoreFromMnemonic(value, password)
            .then(async (keystore) => {
              setIsLoading(false)
              setPublicAddress(keystore.getAddress())
              setPrivateKey(keystore.getPrivateKey(password))
            })
        }
      })
  }, [isReset])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ethereum Wallet</Text>
      <Card>
        <View style={{alignItems: 'center'}}>
          <InfoDisplay
            type="Ethereum Address"
            value={publicAddress}
            isLoading={isLoading}
          />
          <InfoDisplay
            type="Private Key"
            value={isDisplayed ? privateKey : BULLET.repeat(64)}
            isLoading={isLoading}
          />
          <TouchableOpacity activeOpacity={0.7} style={styles.displayButton} onPress={handlePrivateDisplay}>
            <Text style={styles.displayButtonText}>
              {isDisplayed ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        </View>

      </Card>
      <GenerateButton handlePress={generateNewWallet}>Generate New Wallet</GenerateButton>
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
  displayButton: {
    padding: 5,
    width: 50,
    borderRadius: 5,
    backgroundColor: '#62d7ba',
    elevation: 5,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: '#333',
    shadowOpacity: 0.5,
    alignItems: 'center',
  },
  displayButtonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
export default App;
