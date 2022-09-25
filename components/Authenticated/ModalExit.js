import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState} from 'react';
import {Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import {useNavigation} from "@react-navigation/native";
import {Colors} from "../../constants/styles";
import {AuthContext} from "../../store/auth-context";
import GhostButton from "../ui/GhostButton";
import FilledButton from "../ui/FilledButton";

export default function  ModalExit ({modalVisible, setModalVisible}){


    const authCtx = useContext(AuthContext);

    function Exit(){
        authCtx.logout;
        authCtx.navigateScreen(false);
        setModalVisible(false);
    }

    function Cancel(){
        setModalVisible(!modalVisible)
    }

    return (

        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{backgroundColor:'rgba(44,44,44,0.50)', position:'absolute',width:'100%',height:'80%'}}></View>

                <View style={{backgroundColor:'white', width:'100%', height:100, alignItems:'center', position:'absolute', top:'70%', borderRadius:12}}>
                    <MaterialIcons name="exit-to-app" color={Colors.primary800} size={45} style={{marginTop:20}}/>

                    <Text style={{fontSize:17, fontFamily:'SemiBold', marginTop:20}}>Are you sure you want to log out?</Text>

                    <View style={{flexDirection:'row', paddingHorizontal:50, marginTop:40}}>
                        <View style={{width:170, marginRight:20}}>
                            <GhostButton onPress={Cancel} color={Colors.primary800}>Cancel</GhostButton>
                        </View>
                        <View style={{width:170, marginTop:-10}}>
                            <FilledButton onPress={Exit} color={Colors.primary800}>Logout</FilledButton>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    );

}
