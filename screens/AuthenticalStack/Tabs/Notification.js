import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState} from 'react';
import {Alert, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import NotificationData from "../../../components/Authenticated/NotificationData";
import HeaderBlackArrow from "../../../components/ui/HeaderBlackArrow";
import {useNavigation} from "@react-navigation/native";
import FilledButton from "../../../components/ui/FilledButton";
import GhostButton from "../../../components/ui/GhostButton";
import {Colors} from "../../../constants/styles";


export default function  NotificationScreen () {


    const navigation = useNavigation();

    const [modalVisible, setModalVisible]=useState(false);
    const [id, setId]=useState(null);
    const [name, setName]=useState('');
    const [amount, setAmount]=useState(null);

    function submitHandler(credentials) {
        let {id, name, amount, modalVisible} = credentials;
        setId(id);
        setName(name);
        setAmount(amount);
        setModalVisible(modalVisible);
    }

    function Pay(){
        setModalVisible(false);
        navigation.push("TransferMoney", {id:id});
    }

    function Cancel(){
        setModalVisible(false);
    }

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
                <View style={{flexDirection:'row'}}>
                    <HeaderBlackArrow>Notification</HeaderBlackArrow>
                    <Ionicons name="search" color={'#000000'} size={20} style={{marginLeft:200, marginTop: 10}}/>
                </View>

                <Text style={styles.text}>Today</Text>
                <NotificationData day={'today'} onSubmit={submitHandler}/>

                <Text style={styles.text}>Yesterday</Text>
                <NotificationData day={'yesterday'} onSubmit={submitHandler}/>

                <Text style={styles.text}>This weekend</Text>
                <NotificationData day={'this weekend'} onSubmit={submitHandler}/>


                <Modal animationType="slide" transparent={true} visible={modalVisible}>
                    <View style={{backgroundColor:'rgba(44,44,44,0.50)', position:'absolute',width:'100%',height:'80%'}}></View>

                    <View style={{backgroundColor:'white', width:'100%', height:250, alignItems:'center', position:'absolute', top:'70%', borderRadius:12}}>
                        <Image source={require('../../../assets/usd-coin.png')} style={{width:45, height:45, marginTop:20}}/>
                        <Text style={{fontSize:17, fontFamily:'Regular', marginTop:20}}>Make a payment to {name} of ${amount}</Text>

                        <View style={{flexDirection:'row', marginTop:20, width:'100%', }}>
                            <View style={{width:170, marginLeft:30, }}>
                                <GhostButton onPress={Cancel} color={Colors.primary800}>Cancel</GhostButton>
                            </View>
                            <View style={{width:170, marginLeft:30, marginTop:-10}}>
                            <FilledButton onPress={Pay}>Pay</FilledButton>
                            </View>
                        </View>
                    </View>
                </Modal>

                <StatusBar style="auto"/>
            </SafeAreaView>
        );

}

const styles = StyleSheet.create({
    text: {
        marginLeft:20,
        marginTop:30,
        fontSize: 20,
        fontFamily:'SemiBold',
    },
});
