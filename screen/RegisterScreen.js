import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import DatePicker from 'react-native-datepicker';
import React, {useState} from 'react'

import { COLORS, SIZES, FONTS } from '../constants'

export const RegisterScreen = ({ minWidth, fontSize, navigation, ...props }) => {

  const [date, setDate] = useState('23-07-2000');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    const data = {
      date,
      name,
      email,
      alamat,
      password
    }
    console.log('Data before sent!', data)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding">

      <View style={styles.inputContainer}>

        <Text style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.extraLarge,
          color: COLORS.dark,
          textAlign: 'center',
          height:'20%' }}>
          Sign Up
        </Text>

      <TextInput
         placeholder='Nama'
         value={name}
         onChangeText={(value) => setName(value)}
         style={styles.input}/>

         <TextInput
         placeholder='Email'
         value={email}
         onChangeText={(value) => setEmail(value)}
         style={styles.input}/>

        <TextInput
         placeholder='Alamat'
         value={alamat}
         onChangeText={(value) => setAlamat(value)}
         style={styles.input}
         />

        <TextInput
         placeholder='Password'
         value={password}
         onChangeText={(value) => setPassword(value)}
         style={styles.input}
         secureTextEntry={true}
         />

         <TextInput
         placeholder='Confirm Password'
         /* value={}
         onChangetext={text => } */ 
         style={styles.input}
         secureTextEntry={true}
         />

        <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-1990"
          maxDate="7-1-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>  

      <View>
      <TouchableOpacity style={{
      backgroundColor: COLORS.primary,
      borderRadius:SIZES.extraLarge,
      padding: SIZES.extraLarge,
      minWidth: '79%',
      top:'80%',
      marginLeft:'3%',
      marginRight:'3%',
      justifyContent:'center', 
      alignItems: 'center',
      ...props,
      }}
      /* onPress={submit} */ 
      onPress={() => navigation.navigate("TabNavigator")}>
      
        <Text style={{
          fontFamily: FONTS.bold,
          fontSize: fontSize,
          color: COLORS.white,}}>
          Login
        </Text>

      </TouchableOpacity>
      </View>
          
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    marginTop: 5,
  },
  datePickerStyle: {
    width: 295,
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    marginTop: 20,
  },
})