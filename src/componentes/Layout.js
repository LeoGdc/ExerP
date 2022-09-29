import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from "../colors/colors";
import { Colors } from 'react-native/Libraries/NewAppScreen';


const fundo = "../assets/ExerPPdm.png";

export default function Layout(props) {
  return (
    <SafeAreaView style={estilos.container}>
      <ImageBackground style={estilos.imagemFundo} source={require(fundo)}>
        <View style={estilos.containerForm}>
          {props.children}
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor:Colors.light,
    flex:1,
    height:'100%',
    justifyContent:'center',
    width: '100%'
  },
  imagemFundo: {
   
    justifyContent: "flex-end",
    flex:3
  },
  containerForm: {
    backgroundColor: COLORS.white,
    height:'80%',
    maxHeight:'100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%"
  },
})