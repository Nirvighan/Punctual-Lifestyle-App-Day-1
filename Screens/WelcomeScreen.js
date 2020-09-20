import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';
import db from '../Config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
         emailId:'',
         password:''
        }
    }


    UserLogin = (emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password).then(()=>{
            return Alert.alert("Successfully Login");
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        })
    } 
    render(){
        return(
            <View style = {styles.Container}>
                <View style = {styles.header}>
                    <Text style = {styles.headerText}>Welcome to Punctual Lifestyle App!</Text>
                </View>
                <View style = {styles.loginContainer}>
                    <TextInput
                      placeholder = 'Email ID'
                      keyboardType = "email-address"
                      style = {styles.loginBox}
                      onChangeText = {(text)=>{
                          this.setState({
                              emailId:text
                          })
                      }}
                    />
                    <TextInput
                      placeholder = 'Password'
                      secureTextEntry = {true}
                      style = {styles.loginBox}
                      onChangeText = {(text)=>{
                          this.setState({
                              password:text
                          })
                      }}
                    />
                    <TouchableOpacity
                     style = {styles.button}
                     onPress = {()=>{
                         this.UserLogin(this.state.emailId,this.state.password);
                     }}
                    >
                        <Text style = {styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    Container:{
        alignItems:'center',
        backgroundColor:'#D81B60',
        justifyContent:'center',
        flex:1,
        width:'100%',
        height:"100%"
    },
    header:{
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        fontSize:35,
        color:'white',
        marginTop:30
        
    },
    loginContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
    loginBox:{
        width:300,
        height:40,
        marginTop:25,
        borderBottomColor:'white',
        borderBottomWidth:1.5,
        fontSize:15,
        alignSelf:'center'

    },
    buttonText:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:15,
        color:'#D81B60'
    },
    button:{
        alignItems:'center',
        alignSelf:'center',
        marginTop:25,
        width:250,
        height:50,
        backgroundColor:'white',
        justifyContent:'center',
        borderRadius:15,
        borderColor:'white'
    }
})