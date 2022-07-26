import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'

import { COLORS, SIZES, FONTS, assets } from '../constants'

export const LoginScreen = ({ minWidth, minHight, user, fontSize, navigation, ...props }) => {
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
          height:100 }}>
          Login
        </Text>
        
        <View 
        style={{ 
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small -2,
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
        }}>
          
        <Image
        source={assets.user}
        resizeMode='contain'
        style={{ width: 20, height: 20, marginLeft: - 10 }}/>

        <TextInput
         style= {{ marginLeft: 10 }}
         placeholder='Email'
         /* value={}
         onChangetext={text => } */
         />
        </View>

        <View 
        style={{ 
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small -2,
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
        }}>
          
        <Image
        source={assets.lock}
        resizeMode='contain'
        style={{ width: 20, height: 20, marginLeft: - 10 }}/>

        <TextInput
        style= {{ marginLeft: 10 }}
         placeholder='Password'
         /* value={}
         onChangetext={text => } */
         secruetextEntry/>
        </View>

      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            borderRadius:SIZES.extraLarge,
            padding: SIZES.extraLarge,
            minHeight: -10,
            minWidth: '79%',
            top:'80%',
            justifyContent:'center', 
            alignItems: 'center',
            marginTop: 70,
            ...props,
            }}
          onPress={() => {}}
        >
          <Text style={{
            fontFamily: FONTS.bold,
            fontSize: fontSize,
            color: COLORS.white,}}>
            Login
            </Text>
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity
          style={{
            backgroundColor: COLORS.white,
            borderRadius:SIZES.extraLarge,
            borderColor:COLORS.primary,
            borderWidth: 2,
            padding: SIZES.extraLarge,
            minWidth: '79%',
            top:'80%',
            justifyContent:'center', 
            alignItems: 'center',
            marginTop: 40,
            ...props,
            }}
            onPress={() => navigation.navigate("Register")}
            >

          <Text style={{
            fontFamily: FONTS.bold,
            fontSize: fontSize,
            color: COLORS.primary,}}>
            Register
            </Text>
        </TouchableOpacity>
      </View>
      
    </KeyboardAvoidingView>
  )
}

export default LoginScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
})