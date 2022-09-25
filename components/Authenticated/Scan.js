import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from "../../constants/styles";
import {useNavigation} from "@react-navigation/native";

export default function Scan () {

    const navigation = useNavigation();


            return (
                <View style={styles.container}>
                    <View style={{justifyContent:'flex-start', height:'100%'}}>
                        <Image source={require('../../assets/scan/Wave-1.png')} style={{position:'absolute',top:100}}/>
                        <View style={{flexDirection:'row', marginTop:120}}>
                            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                                <Image source={require('../../assets/arrow-back-white.png')} style={{marginLeft:20, marginTop:50}}/>
                            </TouchableOpacity>
                            <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SemiBold', color:'white'}}>Scan QR Code</Text>
                        </View>

                        <View style={{backgroundColor:'white', justifyContent:'center', alignItems:'center', width:'85%', height:400, marginLeft:30, borderRadius:15, marginTop:130}}>

                            <Text style={{ fontSize:20, fontFamily:'SemiBold', }}>QR Code</Text>
                            <Text style={{ fontSize:14, color:'#858C94', fontFamily:'Regular', marginTop:20}}>Scan this for receiving transaction</Text>
                            <Image source={require('../../assets/scan/QRcode.png')} style={{marginTop:20}}/>
                        </View>

                        <Image source={require('../../assets/scan/Wave.png')} style={{position:'absolute',bottom:0}}/>
                    </View>

                    <View style={{backgroundColor:'white', justifyContent:'flex-start', height:220}}>
                    </View>
                    <StatusBar style="auto"/>
                </View>
            );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary800,
        justifyContent: 'center',
    },
    footer:{
        marginTop:20,
        backgroundColor: '#ffffff',
        alignItems:"center",
        justifyContent: "center",
        width: '100%',
        borderRadius:15,
    },
    image:{

    },
    title:{
        fontSize:20,
        marginTop:20,
        fontFamily:'SemiBold',
    },
    text:{
        fontSize:15.5,
        marginTop:20,
        marginLeft:20,
        fontFamily:'Regular',
    },
    textdata:{
        fontSize:15.5,
        marginTop:20,
        marginLeft:20,
        fontFamily:'SemiBold',
    },

});
