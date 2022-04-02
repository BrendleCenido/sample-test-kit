import React, { useEffect, useState } from "react";
import { View, Image, Text, Dimensions, StyleSheet, Alert, Keyboard, KeyboardAvoidingView, ScrollView} from "react-native";
import {Button, colors} from "react-native-elements";
import LottieView from 'lottie-react-native';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from "formik";
import * as yup from 'yup';
import ViewWithLoading from "../components/ViewWithLoading";



export default function TabOneScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [conPassword, setconPassword] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);


const registerSchema = yup.object({
  email: yup.string().required('Email is required').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)$/, 'Invalid email'),
  password: yup.string().required('Password is required'),
  conPassword: yup.string().required('Confirm your password')
});

useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
}, []);

const handleRegister = () => {
   
  if (password === conPassword){
     Alert.alert("Registered");
  }
  else{
    Alert.alert("Error", "Passwords do not match");
  }
  
}

return (
  <ViewWithLoading loading={loading}>
    <Formik 
      initialValues={{
      email: '',
      password: '',
      conPassword: ''
      }}
      onSubmit={(values, action) => {
        console.log(values);
      }}
      validationSchema={registerSchema}
    >
      { ({handleChange, values, errors, touched, handleSubmit}) => (
            <View
              style={styles.Container}
            >
              <View style={{
                marginTop: 10
              }}>
                <Button
                      buttonStyle={{
                        backgroundColor: '#98C1D9'
                      }}
                      containerStyle={{
                        width: 100,
                        marginHorizontal: -30,
                        marginVertical: 10,
                        marginBottom: 10,
                      }}
                      icon = {<Ionicons 
                        name="chevron-back-circle-outline" 
                        size={50} 
                        color="black"
                      />}
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
                <Text style={styles.Login}>Sign-up</Text>
            <ScrollView style={{
                  flex: 1,
                  marginTop: -100,
                  top: 100
            }}>
                <View style={{
                  flex: 0,
                  marginBottom: 5
                }}>
                  <TextInput
                    label = "First Name" 
                    value={firstname}
                    onChangeText={text => setFirstname(text)}
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
                    label = "Last Name" 
                    value={lastname}
                    onChangeText={text => setLastname(text)}
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
                    label = "E-mail address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    autoComplete = {false}
                    autoCapitalize = {"none"}
                    keyboardType = {"email-address"}
                    mode = {"flat"}
                    error={errors.email !== undefined}
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
                {errors.email &&
                  <Text style={{marginVertical: 10, color: 'red'}}>
                    {errors.email}
                  </Text>
                } 
            </View>
        
                <View style={{
                  flex: 0,
                  marginBottom: 5
                }}>
                  <TextInput
                    label = "Password" 
                    value={password}
                    onChangeText={text => setPassword(text)}
                    autoComplete = {false}
                    keyboardType = {"email-address"}
                    mode = {"flat"}
                    error={errors.password !== undefined}
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
                 {errors.password &&
                    <Text style={{marginVertical: 10, color: 'red'}}>
                        {errors.password}
                    </Text>
                } 
                </View>
        
                <View style={{
                  flex: 0,
                  marginBottom: 5
                }}>
                  <TextInput
                    label = "Confirm Password" 
                    value={conPassword}
                    onChangeText={text => setconPassword(text)}
                    autoComplete = {false}
                    keyboardType = {"email-address"}
                    mode = {"flat"}
                    error={errors.conPassword !== undefined}
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
                {errors.conPassword &&
                  <Text style={{marginVertical: 10, color: 'red'}}>
                    {errors.conPassword}
                  </Text>
                } 
                </View>
            </ScrollView>
        
                  <View style={{
                    flex: 0,
                    alignItems: 'center',
                    top: 150
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
                      onPress={() => handleRegister()}>
                    </Button>
                  </View>
              </View>
            </View>
      ) }
    </Formik>
  </ViewWithLoading>
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
