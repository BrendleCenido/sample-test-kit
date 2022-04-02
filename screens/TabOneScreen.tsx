import React, { useState } from "react";
import { View, Image, Text, Dimensions, StyleSheet, Alert, Keyboard, KeyboardAvoidingView, ScrollView} from "react-native";
import {Button, colors} from "react-native-elements";
import LottieView from 'lottie-react-native';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from "formik";
import * as yup from 'yup';
import ViewWithLoading from "../components/ViewWithLoading";
import { isLoading } from "expo-font";


export default function TabOneScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);


const registerSchema = yup.object({
  email: yup.string().required('Email is required').matches(/htrhtjytjyt7/, 'Invalid email'),
  password: yup.string().required('Password is required')
});

return (
  <ViewWithLoading loading={loading}>
    <Formik 
      initialValues={{
      email: '',
      password: ''
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
                    label = "Last Name" 
                    value={phone}
                    onChangeText={text => setPhone(text)}
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
                    label = "Password" 
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
                  marginBottom: 5
                }}>
                  <TextInput
                    label = "Confirm Password" 
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
                    />
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
