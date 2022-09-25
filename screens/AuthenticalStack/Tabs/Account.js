import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Svg, {Circle} from "react-native-svg";
import {Entypo} from '@expo/vector-icons';
import {useIsFocused, useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {Colors} from "../../../constants/styles";
import {fetchAccountDetails, fetchAccounts} from "../../../utils/database";

export default function Account () {

    const navigation = useNavigation();

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');
    const [usersId, setUsersId]=useState('');
    const [address, setAddress]=useState('');
    const [account, setAccount]=useState('');

    const isFocused = useIsFocused();

    async function loadAccount() {
        const account = await fetchAccountDetails(1);
        setName(account.name);
        setEmail(account.email);
        setUsersId(account.id);
        setAddress(account.address);
        console.log(account.token);
    }

    useEffect(() => {

        if (isFocused) {
            loadAccount();
        }
    }, [isFocused]);

        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../../assets/Waves.png')} style={styles.image}>
                    <View style={{justifyContent:'flex-start', height:550}}>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
                                <Image source={require('../../../assets/arrow-back-white.png')} style={{marginLeft:20, marginTop:10}}/>
                            </TouchableOpacity>
                            <Text style={{marginLeft:20, marginTop:10, fontSize:20, fontFamily:'SemiBold', color:'white'}}>Account</Text>
                            <TouchableOpacity onPress={()=>{navigation.push("Settings")}}>
                                <Entypo name={'menu'} size={25} color={'white'} style={{marginLeft:240, marginTop:10}}/>
                            </TouchableOpacity>
                        </View>

                        <View style={{flex: 1, justifyContent: 'center',}}>
                            <Svg height="70%" width="70%" viewBox="0 0 100 100" style={{position: 'absolute', top:'-5%', left:'13%'}}>
                                <Circle cx="53" cy="50" r="29" fill="#FFFFFF20"/>
                                <Circle cx="53" cy="50" r="33" fill="#FFFFFF10" />
                                <Circle cx="53" cy="50" r="38" fill="#FFFFFF07" />
                            </Svg>
                            <TouchableOpacity style={{position:'absolute', height:130, width:130, top:'17%', left:'35%'}}>
                                <Image source={require('../../../assets/photo.png')}  style={{height:130, width:130, }}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

                <View style={{backgroundColor:'white', justifyContent:'flex-start', height:250}}>
                </View>

                <View style={{position:'absolute', backgroundColor:'white', borderColor:Colors.primary800, height:350, width:'90%', marginRight:'5%', marginLeft:'5%', top:400, borderWidth:1, borderRadius:15}}>
                    <Text style={styles.text}>Name</Text>
                    <Text style={styles.text}>Email</Text>
                    <Text style={styles.text}>Phone number</Text>
                    <Text style={styles.text}>Account number</Text>
                    <Text style={styles.text}>Users ID</Text>
                    <Text style={styles.text}>Address</Text>
                </View>

                <View style={{position:'absolute',height:350, width:'40%', marginRight:'5%', marginLeft:190, top:400, alignItems:'flex-end'}}>
                    <Text style={styles.textdata}>{name}</Text>
                    <Text style={styles.textdata}>{email}</Text>
                    <Text style={styles.textdata}>{phone}</Text>
                    <Text style={styles.textdata}>{account}</Text>
                    <Text style={styles.textdata}>{usersId}</Text>
                    <Text style={styles.textdata}>{address}</Text>
                </View>
                <StatusBar style="auto"/>
            </SafeAreaView>
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
    title:{
        fontSize:20,
        marginTop:20,
        fontFamily:'SemiBold',
    },
    text:{
        fontSize:18,
        marginTop:30,
        marginLeft:20,
        fontFamily:'Regular',
    },
    textdata:{
        fontSize:18,
        marginTop:30,
        marginLeft:20,
        fontFamily:'SemiBold',
    },

});
