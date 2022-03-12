import React from "react";
import {StyleSheet,View,Text, TextInput,TouchableOpacity, Image} from  "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source = {require('C:/Users/Brendle Cenido/OneDrive/Documents/BSIT 2-1A (2nd Sem)/APPLICATION DEV/PROJECTS/sample-test-kit/assets/images/LOGIN.png')} 
      style={styles.imageIcon}/>
      <Text style={styles.Login}>Welcome!</Text>
      <TextInput style={styles.inputText}
        placeholder= "Enter Username"
      />
      <TextInput style={styles.inputText}
        placeholder= "Enter Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.basictext}>No Account yet?</Text>
      <TouchableOpacity style={styles.btnSignUp}>
        <Text style={styles.btnText}>Sign-up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#656D4A',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'poppins-regular'
},
Login: {
 fontSize: 30,
  textAlign: 'center',
  margin: 18,
  fontFamily: 'poppins-bold',
  color: 'white'
},
inputText:{
  width: "90%",
  backgroundColor:'#A4AC86',
  padding: 15,
  marginBottom: 10,
  color: '#333D29'
},
btnLogin: {
  backgroundColor: '#582F0E',
  padding: 15,
  width: '45%',
  justifyContent: 'center',
  marginBottom: 30
},
btnSignUp: {
  backgroundColor: '#582F0E',
  padding: 15,
  width: '30%',
  justifyContent: 'center'
},
btnText: {
  fontSize: 16,
  textAlign: 'center',
  color: '#B6AD90',
  fontFamily: 'poppins-bold'
},
imageIcon: {     
  width: 100, 
  height: 100 
},
basictext: {
  fontFamily: 'poppins-semi-bold'
}
});
  
