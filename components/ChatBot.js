import React from 'react';
import { Actions } from 'react-native-router-flux';

import { StyleSheet ,Text ,TouchableOpacity ,View ,TextInput } from 'react-native';

export default class ChatBot extends React.Component {
  constructor(){
    super();
    this.state={ 
      message:'',
      messages: []
    }
  }

  handleSubmit = event => {
    // var account_message=[]
    // var i = 0
    event.preventDefault();
    const mess = this.state.message 
    fetch('https://dev.beprowd.fr/webchat-connector', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        auth:"53616c7465645f5f30c3fbcab5721e791de5c170251741079bc752ffed341158bbbfa3a8d3e413f32519ab3bdd2d9e73e3d8d9310094281d2aa23537720c3d8dbfcb7d59be889f82e8ccae57e8e7b0af",
        conversation_id:"114548-4542457-142424-456643-webchat",
        text: mess
      })
    })
    .then((res) => { return res.json() })
    .then((response) => {
      console.log(response,'teeest');
        this.setState({messages:response});
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        this.setState({ isLoading: false });
    });
  }

  goToAccueil = () => {
    Actions.accueil()
  }

  render(){
  return (
    <View style={styles.container}>
      <TextInput
      style={input.container} 
      type='text' name='message' 
      placeholder="Enoyer votre message" 
      onChangeText={(message) => this.setState({message})}
      value={this.state.message}
      />
      <TouchableOpacity
        style = {styles.submitButton}
        onPress = {this.handleSubmit}>
        <Text style = {styles.submitButtonText}> Envoyer </Text>
      </TouchableOpacity>
      <TouchableOpacity  
      style={styles.submitButton}
      onPress={this.goToAccueil}>
      <Text style = {styles.submitButtonText}>Accueil</Text>
      </TouchableOpacity>
    </View>
  )}   
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

const input = StyleSheet.create({
  container: {
      height: 50,
      width:250, 
      fontSize: 20,
      backgroundColor: '#ffffff',
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      borderTopRightRadius:10,
      borderTopLeftRadius:10,
      marginTop: 10,
    }
})

