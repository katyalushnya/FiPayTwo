import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../constants/styles';
import * as React from "react";
import GlobalStyle from "../../components/ui/GlobalStyle";

import Svg, { Circle } from 'react-native-svg';

export default function FaceScreen({ onFace }) {

    const navigation = useNavigation();

    return (
        <View style={styles.all}>

            <Svg height="60%" width="60%" viewBox="0 0 100 100" style={{marginTop:50}}>
                <Circle cx="50" cy="50" r="15" fill="#FFB80033"/>
                <Circle cx="50" cy="50" r="27" fill="#FFB80033"/>
                <Circle cx="50" cy="50" r="37" fill="#FFB80033"/>
            </Svg>

            <TouchableOpacity style={{position: 'absolute', top:'34.3%',}}>
                <Image source={require('../../assets/cameraalt.png')} style={{width:30,height:30 }}/>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Image source={require('../../assets/face-icon.png')} style={{width:65,height:65,}}/>
                <TouchableOpacity onPress={onFace}>
                    <Text style={styles.title}>Face Authentication</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Please point your face on the screen</Text>
            </View>

            <StatusBar style="auto"/>
        </View>
    );
}


const styles = StyleSheet.create({
    all:{
        backgroundColor: Colors.primary800,
        flex: 1,
        alignItems: "center",
    },
    authContent: {
        marginTop:20,
        marginHorizontal: 10,
        padding: 5,
    },
    footer:{
        marginTop:20,
        backgroundColor: '#ffffff',
        alignItems:"center",
        justifyContent: "center",
        flex:1,
        width: '100%',
        borderRadius:15,
    },
    buttons: {
        flexDirection:'row',
        marginTop:40,
        justifyContent: 'center',
    },
    title:{
        fontSize:25,
        color:'#394452',
        marginTop:20,
        marginLeft:15,
        fontFamily:'Bold',
    },
    text:{
        color: Colors.softgrey,
        fontSize: 16,
        fontFamily:'SemiBold',
    },
    container: {
        flex:1,
        justifyContent: 'center',
    },
});
