import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useRef, useState} from 'react';
import {Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import CountDownComponent from "./CountDown";
import FlashMessage, {showMessage} from "react-native-flash-message";
import {useNavigation} from "@react-navigation/native";
import HeaderBlackArrow from "./HeaderBlackArrow";
import FlatButton from "./FlatButton";
import DisabledButton from "./DisabledButton";
import {Colors} from "../../constants/styles";


export default function CodeInputField({
                                           inputs,
                                           nextInputIndex,
                                           OTP,
                                           input,
                                           handleChangeText,
                                           submitOTPVarification,
                                           disabled,
                                           activeResend,
                                           resendingEmail,
                                           resendStatus,
                                           timeLeft,
                                           targetTime,
                                           resendEmail
                                       }) {

    return (
        <View style={styles.container}>

            <View style={styles.container}>
                <Text style={styles.title}>Verification Code</Text>

                <View style={{flexDirection: 'row', marginTop: 50, marginLeft: 15}}>
                    {inputs.map((inp, index) => {
                        return (
                            <View key={index.toString()}
                                  style={{justifyContent: 'space-between', paddingHorizontal: 10}}>
                                <TextInput ref={nextInputIndex === index ? input : null} value={OTP[index]}
                                           onChangeText={(text) => handleChangeText(text, index)}
                                           keyboardType={"numeric"} maxLength={1} style={styles.input}/>
                            </View>
                        );
                    })}
                </View>

                <DisabledButton onPress={submitOTPVarification} disabled={disabled}>Next</DisabledButton>

                <CountDownComponent activeResend={activeResend} resendingEmail={resendingEmail}
                                    resendStatus={resendStatus} timeLeft={timeLeft} targetTime={targetTime}
                                    resendEmail={resendEmail}/>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    title: {
        fontSize: 27,
        color: '#394452',
        fontFamily: 'SemiBold',
        marginLeft: 20,
    },
    input: {
        width: 50,
        height: 50,
        backgroundColor: Colors.primary100,
        borderRadius: 15,
        textAlign: 'center',
        justifyContent: 'center',
    },
});
