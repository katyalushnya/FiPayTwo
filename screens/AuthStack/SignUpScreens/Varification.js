import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, SafeAreaView} from 'react-native';

import CodeInputField from "../../../components/ui/CodeInputField";
import {useNavigation} from "@react-navigation/native";
import FlashMessage, {showMessage} from "react-native-flash-message";
import HeaderBlackArrow from "../../../components/ui/HeaderBlackArrow";
import CountDownComponent from "../../../components/ui/CountDown";

let OTP_code = 4900; //но нужно сделать отправку на имейл

let newInputIndex = 0;

const isObjValid = (obj) => {
    return Object.values(obj).every(val => val.trim());
}

export default function Varification() {
    const navigation = useNavigation();

    const [disabled, setDisabled] = useState(true);
    const input = useRef();
    const inputs = Array(4).fill('');
    const [OTP, setOTP] = useState({0: '', 1: '', 2: '', 3: ''});
    const [nextInputIndex, setNewInputIndex] = useState(0);

    //--------------
    const [timeLeft, setTimeLeft] = useState(null);
    const [targetTime, setTargetTime] = useState(null);
    const [activeResend, setActiveResend] = useState(false);

    const [resendingEmail, setResendingEmail] = useState(false);
    const [resendStatus, setResendStatus] = useState('Resend');

    let resendTimerInterval;

    const handleChangeText = (text, index) => {
        const newOTP = {...OTP};
        newOTP[index] = text;
        setOTP(newOTP);

        const lastInputIndex = inputs.length - 1;
        if (!text) newInputIndex = index === 0 ? 0 : index - 1;
        else newInputIndex = index === lastInputIndex ? (lastInputIndex) : index + 1;
        setNewInputIndex(newInputIndex);

        if (newInputIndex === lastInputIndex)
            setDisabled(false);
    };

    const triggerTime = (targetTimeSeconds = 60) => {
        setTargetTime(targetTimeSeconds);
        setActiveResend(false);
        const finalTime = +new Date() + targetTimeSeconds * 1000;
        resendTimerInterval = setInterval(() => calculateTimeLeft(finalTime), 1000);
    };

    const calculateTimeLeft = (finalTime) => {
        const difference = finalTime - +new Date();
        if (difference >= 0) {
            setTimeLeft(Math.round(difference / 1000));
        } else {
            clearInterval(resendTimerInterval);
            setActiveResend(true);
            setTimeLeft(null);
        }
    };

    const resendEmail = async () => {
        setTargetTime(0);
        let message = 'Your code is ' + OTP_code.toString();
        showMessage({
            message: message,
            type: "info",
        });
        setResendingEmail(false);
        triggerTime();
    }

    const submitOTPVarification = async () => {
        Keyboard.dismiss();

        if (isObjValid(OTP)) {
            let val = '';

            Object.values(OTP).forEach(v => {
                val += v
            });
            if (val.toString() === OTP_code.toString()) {
                setDisabled(false);
                navigation.navigate('SignupPartTwoScreen');
            } else
                alert('OTP isn`t correct');
        }
    }


    useEffect(() => {

        resendEmail()
        input.current.focus();
        triggerTime();

        return () => {
            clearInterval(resendTimerInterval);
        }

    }, [nextInputIndex]);


    function goBack() {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderBlackArrow onPress={goBack}> </HeaderBlackArrow>
            <View style={styles.container}>
                <CodeInputField inputs={inputs} input={input} nextInputIndex={nextInputIndex} OTP={OTP}
                                handleChangeText={handleChangeText} submitOTPVarification={submitOTPVarification}
                                disabled={disabled} activeResend={activeResend} resendingEmail={resendingEmail}
                                resendStatus={resendStatus} timeLeft={timeLeft} targetTime={targetTime}
                                resendEmail={resendEmail}/>

                <StatusBar style="auto"/>
            </View>
            <FlashMessage position="top"/>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },

    title: {
        fontSize: 27,
        color: '#394452',
        fontFamily: 'SemiBold',
        marginLeft: 20,
    },
});
