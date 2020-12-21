import React from 'react';
import { Actions } from 'react-native-router-flux';

import { StyleSheet ,Text ,TouchableOpacity ,View } from 'react-native';

const Accueil=(props)=> {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style = {styles.submitButton}
      onPress = {()=>Actions.historique()}>
        <Text style = {styles.submitButtonText}> Historique </Text>
      </TouchableOpacity>

      <TouchableOpacity  
      style = {styles.submitButton}
      onPress = {()=>Actions.chatbot()}>
        <Text style = {styles.submitButtonText}>ChatBot</Text>
      </TouchableOpacity>
    </View>
  )   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },submitButton: {
    backgroundColor: '#7fd18f',
    padding: 10,
    margin: 15,
    height: 40,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    marginTop: 10
  },submitButtonText:{
    color: 'white'
  }
});

export default Accueil
