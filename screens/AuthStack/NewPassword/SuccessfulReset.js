import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {MaterialCommunityIcons} from "@expo/vector-icons";
import FooterText from "../../../components/ui/FooterText";
import {Colors} from "../../../constants/styles";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";

export default function SuccessfulForgotPassword() {
    const navigation = useNavigation();

    return (
        <View style={styles.all}>

            <TouchableOpacity onPress={() => {
                navigation.navigate("NewPassword")
            }}>
                <MaterialCommunityIcons name="check-circle" color={Colors.primary800} size={120}/>
            </TouchableOpacity>

            <Text style={styles.title}>Successful!</Text>

            <View style={{marginTop: 30,}}>
                <FooterText>Please check your email to confirm</FooterText>
            </View>
            <StatusBar style="auto"/>
        </View>
    );

}

const styles = StyleSheet.create({
    all: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: '#6D5FFD',
        fontFamily: 'SemiBold',
        marginTop: 30,
    },
});


