import React, { useState } from "react";
import { View, Image, Text, Dimensions, StyleSheet, Alert, Keyboard, KeyboardAvoidingView} from "react-native";
import {Button, colors} from "react-native-elements";
import LottieView from 'lottie-react-native';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


export default function TabOneScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);


  return (
    <KeyboardAvoidingView
      style={styles.Container}
      behavior="padding"
    >
      <View style={{
        marginTop: 30
      }}>
        <Ionicons 
          name="chevron-back-circle-outline" 
          size={35} 
          color="black" 
        />
      </View>
      <View style={styles.Lottielogo}>
        <LottieView
          source={require('../assets/images/53395-login.json')}
          autoPlay={true}
          loop={true}
        />
      </View>

      <View style={{
        flex: 1,
        top: -140
      }}>
        <View style={{
          flex: 0,
          marginBottom: 5
        }}>
          <Text style={styles.Login}>Sign-up</Text>
          <View style={{
          flex: 0,
          marginBottom: 5
        }}>
          <TextInput
            label = "Full Name" 
            value={name}
            onChangeText={text => setName(text)}
            autoComplete = {false}
            mode = {"flat"}
            right={
            <TextInput.Icon 
            name= "pen"
            color = {"#3D5A80"}
            disabled = {true}
            />}
            theme={{
              colors: {
                placeholder: '#293241',
                primary: '#293241',
                background: '#E0FBFC'
              }
            }}
        />
        </View>

        <View style={{
          flex: 0,
          marginBottom: 5
        }}>
          <TextInput
            label = "Phone number" 
            value={phone}
            onChangeText={text => setPhone(text)}
            autoComplete = {false}
            mode = {"flat"}
            right={
            <TextInput.Icon 
            name= "phone"
            color = {"#3D5A80"}
            disabled = {true}
            />}
            theme={{
              colors: {
                placeholder: '#293241',
                primary: '#293241',
                background: '#E0FBFC'
              }
            }}
        />
        </View>

          <TextInput
            label = "E-mail address"
            value={email}
            onChangeText={text => setEmail(text)}
            autoComplete = {false}
            autoCapitalize = {"none"}
            keyboardType = {"email-address"}
            mode = {"flat"}
            right = {
              <TextInput.Icon  
                name="email-edit" 
                size={24} 
                color="black" 
                disabled = {true}
              />
            }
            theme={{
              colors: {
                placeholder: '#293241',
                primary: '#293241',
                background: '#E0FBFC'
              }
            }}
        />
        </View>

        <View style={{
          flex: 0,
          marginBottom: 5
        }}>
          <TextInput
            label = "Create a Password" 
            value={password}
            onChangeText={text => setPassword(text)}
            autoComplete = {false}
            mode = {"flat"}
            right={
            <TextInput.Icon 
            name= {visible ? "eye-off" : "eye"}
            color = {"#3D5A80"}
            onPress={() => {
              setVisible(!visible)
            }}
            />}
            secureTextEntry={visible}
            theme={{
              colors: {
                placeholder: '#293241',
                primary: '#293241',
                background: '#E0FBFC'
              }
            }}
        />
        </View>

        <View style={{
          flex: 0,
          marginBottom: 40
        }}>
          <TextInput
            label = "Re-enter your password" 
            value={repassword}
            onChangeText={text => setRepassword(text)}
            autoComplete = {false}
            mode = {"flat"}
            right={
            <TextInput.Icon 
            name= {visible ? "eye-off" : "eye"}
            color = {"#3D5A80"}
            onPress={() => {
              setVisible(!visible)
            }}
            />}
            secureTextEntry={visible}
            theme={{
              colors: {
                placeholder: '#293241',
                primary: '#293241',
                background: '#E0FBFC'
              }
            }}
        />
      </View>

        <View style={{
          flex: 0,
        }}>

          <View style={{
            flex: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Button
              title="CREATE ACCOUNT"
              buttonStyle={{
                backgroundColor: '#EF795F',
                borderWidth: 2,
                borderColor: '#293241',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,
                marginBottom: 30,
              }}
              titleStyle={{ fontWeight: 'bold',
               color: '#e0fbfc'
              }}
            />
          </View>

        </View>
      </View>

      <View style={{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingBottom: 20,
      }}>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#98C1D9',
    padding: 20
  },
  Login: {
     fontSize: 30,
      textAlign: 'center',
      margin: 18,
      fontFamily: 'poppins-regular',
      color: 'black'
  },
  Lottielogo: {
    flex: 1,
    height: '100%',
    width: '50%',
    marginLeft: 80,
    marginTop: -120
  }
});
