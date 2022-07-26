import React from "react";
import { ImageBackground, TouchableOpacity, Text, View, Image, Button } from "react-native";
import { COLORS, SIZES, FONTS } from '../constants'

export const Started = ({ minWidth, fontSize, navigation, ...props }) => (
  <View style={{ flex:1 }}>
    <ImageBackground 
    source={require ("../assets/images/image1.jpg")} 
    resizeMode="cover"
    style={{ flex:1 }}
    blurRadius={10}>
    
    <TouchableOpacity style={{
      backgroundColor: COLORS.primary,
      borderRadius:SIZES.extraLarge,
      padding: SIZES.extraLarge,
      minWidth: minWidth,
      top:'80%',
      marginLeft:'3%',
      marginRight:'3%',
      justifyContent:'center', 
      alignItems: 'center',
      ...props,
      }}
      onPress={() => navigation.navigate("Login")}>
      
        <Text style={{
          fontFamily: FONTS.bold,
          fontSize: fontSize,
          color: COLORS.white,}}>
          Get Started
        </Text>
      </TouchableOpacity>

      <View>
      <Text style={{
          fontFamily: FONTS.bold,
          marginTop: 300,
          marginLeft:17,
          fontSize: 35,
          color: COLORS.white,}}>
        Find the perfect car for you!
      </Text>
      </View>
      <View>
      <Text style={{
          fontFamily: FONTS.regular,
          marginTop: 10,
          marginLeft:17,
          fontSize: 15,
          color: COLORS.white,}}>
        Choose your car to rent from a wide 
        range of cars & locations.
      </Text>
      </View>

    </ImageBackground>      
  </View>
);

export default Started;