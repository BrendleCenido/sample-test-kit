import React, { useState } from "react";
import { View, Image, Text, Dimensions, StyleSheet, Alert, Keyboard, KeyboardAvoidingView,  } from "react-native";
import {Button, colors} from "react-native-elements";
import LottieView from 'lottie-react-native';
import { TextInput } from 'react-native-paper';


export default function TabOneScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPasssword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false); 

  const handleLogin = () => {
    const EMAIL_ADDRESS = "cenido.brendle@gmail.com";
    const PASSWORD = "12345";
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (email === EMAIL_ADDRESS && password === PASSWORD){ 
        return Alert.alert(
          "LOG IN",
          'Successfully logged in!'
        )
      }
  
      Alert.alert(
        "INVALID CREDENTIALS",
        "Please enter a correct username and password",
      )
    }, 500);
  }

  return (
    <View
      style={styles.Container}
    >
      <View style={styles.Lottielogo}>
        <LottieView
          source={require('../assets/images/72342-welcome.json')}
          autoPlay={true}
          loop={true}
        />
      </View>

      <View style={{
        flex: 1,
        top: -80
      }}>
        <View style={{
          flex: 0,
          marginBottom: 20
        }}>
          <Text style={styles.Login}>Welcome!</Text>
          <TextInput
            label = "Email"
            value={email}
            onChangeText={text => setEmail(text)}
            autoComplete = {false}
            autoCapitalize = {"none"}
            keyboardType = {"email-address"}
            mode = {"flat"}
            right = {
              <TextInput.Icon 
              name="email" 
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
          marginBottom: 40
        }}>
          <TextInput
            label = "Password" 
            value={password}
            onChangeText={text => setPasssword(text)}
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
              title="LOG IN"
              buttonStyle={{
                backgroundColor: '#EF795F',
                borderWidth: 2,
                borderColor: '#293241',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
                marginBottom: 30,
              }}
              titleStyle={{ fontWeight: 'bold',
               color: '#e0fbfc'
              }}
              onPress = {handleLogin}
              loading = {loading}
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
        <Text style={styles.Signup}>
          No account yet?
        </Text>
      </View>
    </View>
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
      fontFamily: 'poppins-bold',
      color: 'black'
  },
  Signup: {
    fontFamily: 'poppins-regular',
    fontSize: 20,
    top: -20
  },
  Lottielogo: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20
  }
});
