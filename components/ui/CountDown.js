import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';
import InputText from "./InputText";
import FlatButton from "./FlatButton";
import FooterText from "./FooterText";

const CountDownComponent = ({activeResend, resendEmail, resendStatus, timeLeft, targetTime}) => {
    return (
        <View style={{alignItems:'center'}}>
            <View style={{marginTop: 10}}>
                <FooterText>Resend code
                    {!activeResend && (
                        <Text> in {timeLeft || targetTime} s</Text>
                    )
                    }</FooterText>


                {activeResend && (
                    <View style={{marginTop:20}}>
                        <FooterText>Didn't recieve the email?</FooterText>
                        <FlatButton onPress={() => {
                            resendEmail
                        }}>{resendStatus}</FlatButton>
                    </View>
                )}

            </View>
            <StatusBar style="auto"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 50,
        height: 50,
        backgroundColor: 'rgba(109,95,253,0.1)',
        borderRadius: 15,
        textAlign: 'center',
        justifyContent: 'center',
    },
});

export default CountDownComponent;
