import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Acceuil from '../components/Accueil.js'
import ChatBot from '../components/ChatBot'
import Historique from "../components/Historique";

const Routes = () => {

   return(
      <Router>
         <Scene key = "root">
            <Scene key="accueil" navigationBarStyle={{backgroundColor: '#7fd18f'}} component = {Acceuil} title='Accueil'/>
            <Scene key="chatbot" navigationBarStyle={{backgroundColor: '#7fd18f'}} component = {ChatBot} title='ChatBot'/>
            <Scene key="historique" navigationBarStyle={{backgroundColor: '#7fd18f'}} component = {Historique} title='Historique'/>
         </Scene>
      </Router>
   )

}


export default Routes