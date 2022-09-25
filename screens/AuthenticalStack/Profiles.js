import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import FilledButton from "../../components/ui/FilledButton";
import {Colors} from "../../constants/styles";

export default function Profiles () {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [secondaryEmail, setSecondaryEmail] = useState('');
    const [secondaryPhone, setSecondaryPhone] = useState('');
    const [secondaryAddress, setSecondaryAddress] = useState('');

        const navigation = useNavigation();

        function goBack() {
            navigation.goBack();
        }

        function UpdateData (){
           navigation.replace("Tabs");
        };

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
                <HeaderBlackArrow onPress={goBack}>Profiles</HeaderBlackArrow>

                <View style={styles.block}>
                    <Text style={styles.title}>Email Address</Text>
                    <View>
                        <Text style={styles.text}>Primary</Text>
                        <Text style={styles.text}>Secondary</Text>
                    </View>
                    <View style={{alignItems:'flex-end', position:'absolute', marginLeft:'50%', marginTop:40}}>
                        <Text style={styles.text}>{email}</Text>
                        <Text style={styles.text}>{secondaryEmail}</Text>
                    </View>
                </View>

                <View style={styles.block}>
                    <Text style={styles.title}>Phone Number</Text>
                    <View>
                        <Text style={styles.text}>Primary</Text>
                        <Text style={styles.text}>Secondary</Text>
                    </View>
                    <View style={{alignItems:'flex-end', position:'absolute', marginLeft:'50%', marginTop:40}}>
                        <Text style={styles.text}>{phone}</Text>
                        <Text style={styles.text}>{secondaryPhone}</Text>
                    </View>
                </View>


                <View style={styles.block}>
                    <Text style={styles.title}>Address</Text>
                    <View>
                        <Text style={styles.text}>Primary</Text>
                        <Text style={styles.text}>Secondary</Text>
                    </View>
                    <View style={{alignItems:'flex-end', position:'absolute', marginLeft:'50%', marginTop:40}}>
                        <Text style={styles.text}>{address}</Text>
                        <Text style={styles.text}>{secondaryAddress}</Text>
                    </View>
                </View>

                <View style={{marginLeft:20, marginRight:20, marginTop:200}}>
                    <FilledButton onPress={UpdateData}>Edit Information</FilledButton>
                </View>

                <StatusBar style="auto"/>

            </SafeAreaView>
        );

}

const styles = StyleSheet.create({
    block:{
        marginTop:20,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:Colors.primary800,
        borderRadius:10,
        height:140,
        width:'90%',
        marginLeft:20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14.78,

        elevation: 22,
    },
    title:{
        fontSize:17,
        color:Colors.title01,
        marginTop:20,
        marginLeft:20,
        fontFamily:'SemiBold',
    },
    text:{

        fontSize:15.5,
        marginTop:15,
        marginLeft:20,
        fontFamily:'Regular',
    },
    buttonSignIn:{
        backgroundColor:Colors.primary800,
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginLeft:20,
        marginRight:20,
        marginTop:180,
    },
});
