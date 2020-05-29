import './shim.js'
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import InfoDisplay from './components/InfoDisplay';
import GenerateButton from './components/GenerateButton';
import {StyleSheet, Text, View} from 'react-native';
import wallet from 'eth-wallet-light';
// import { generateSecureRandom } from 'react-native-securerandom';


const App = props => {

  const [privateKey, setPrivateKey] = useState('')
  const [publicAddress, setPublicAddress] = useState('')

  const password = 'will change later'

  useEffect(() => {
    //will need to write logic to persist data so that we generate the same key pairs on device
    new wallet.Keystore().initializeFromEntropy('entropy', password)
      .then((keystore) => {
        setPublicAddress(keystore.getAddress())
        setPrivateKey(keystore.getPrivateKey(password))
<<<<<<< HEAD
        // console.log('Mnemonic -->', keystore.getMnemonic(password))
        
      })
  }, [])
=======
      })
  }, [])
  console.log('address key -->', publicAddress)
  console.log('private key -->', privateKey)

>>>>>>> parent of f3f4ff3... wrote note as reminder to persist 'getMnemonic' data for restoring old key pair

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ethereum Wallet</Text>
      <Card>
        <View>
          <InfoDisplay
            type="Ethereum Address"
<<<<<<< HEAD
=======
            value={'ghsdfkgjh345i3h463ikjbn1234'}
          />
          <InfoDisplay
            type="Public Key"
>>>>>>> parent of f3f4ff3... wrote note as reminder to persist 'getMnemonic' data for restoring old key pair
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
