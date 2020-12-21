import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet ,Text ,TouchableOpacity ,View, ScrollView, FlatList } from 'react-native';

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        auth:"53616c7465645f5f30c3fbcab5721e791de5c170251741079bc752ffed341158bbbfa3a8d3e413f32519ab3bdd2d9e73e3d8d9310094281d2aa23537720c3d8dbfcb7d59be889f82e8ccae57e8e7b0af",
        conversation_id:"114548-4542457-142424-456643-webchat",
        type:"get",
        lookback:"2020-12-10T19:37:28.622Z"
    })
};

export default class Historique extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            isLoading: true
        }
    }

    
    componentDidMount = async () => {
        // var account_message=[]
        // var i = 0
        fetch('https://dev.beprowd.fr/webchat-history', requestOptions)
        .then((res) => { return res.json() })
        .then((response) => {
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
        const { messages, isLoading } = this.state;
        // console.log(this.state.messages,'test');
        // console.log(this.state.messages);
        
        return (
            <ScrollView>
                {messages.map((data) => 
                {
                    if (typeof data.message === 'string') {
                        return (
                            <View style = {styles.bulleUser} key={data.id}>
                            <Text style={styles.text}>{data.message}</Text>
                            </View> 
                        ) 
                    }else {
                        // return data.message.map((item) => 
                        // {
                        //     if (typeof item.content === 'string') { 
                        //         console.log(item, 'ere');
                        //         return <View style = {styles.bulle} key={item.content}>
                        //         <Text style={styles.text}>{item.content}</Text>
                        //         </View>  
                        //     }
                        // })  
                    }
                })}
                <TouchableOpacity
                style={styles.submitButton}
                onPress={this.goToAccueil}>
                    <Text style = {styles.submitButtonText}>Accueil</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }  
}

const styles = StyleSheet.create({
    submitButton: {
        justifyContent: 'center',
        backgroundColor: '#7fd18f',
        padding: 10,
        margin: 15,
        height: 40,
        width: 70,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        marginTop: 10
    },submitButtonText:{
        color: 'white'
    },bulle: {
        marginLeft:10,
        width: 300,
        backgroundColor: '#3470F9',
        borderRadius: 20,
        marginTop:20,
        padding:10
    },text: {
        fontWeight: 'bold',
        padding: 10
    },bulleUser: {
        alignSelf: 'flex-end',
        marginRight:10,
        width: 300,
        backgroundColor: '#7fd18f',
        borderRadius: 20,
        marginTop:20,
        padding:10
    }
});


