import {Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import { Colors } from '../../constants/styles';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import * as React from "react";
import {useState} from "react";

function SecuredInput({ ChangeText }) {

    const [show, setShow] = useState(true);

    return (
        <View style={{justifyContent: 'center', }}>
            <TextInput style={styles.input} secureTextEntry={show} onChangeText={ChangeText}/>
            <TouchableOpacity onPress={()=> {setShow(!show)}}>
                {(!show) ? (
                    <MaterialCommunityIcons name="eye" color={Colors.softgrey} size={25} style={{position:'absolute', top:-38, left:370}}/>
                ):(<MaterialCommunityIcons name="eye-off" color={Colors.softgrey} size={25} style={{position:'absolute', top:-38, left:370}}/>)}
            </TouchableOpacity>
        </View>
    );
}

export default SecuredInput;

const styles = StyleSheet.create({
    input:{
        marginTop:5,
        borderColor:'#a5abb3',
        borderWidth:1,
        marginLeft:20,
        marginRight:20,
        borderRadius:5,
        height:50,
        paddingLeft:15,
        fontFamily:'SemiBold',
    },
});
