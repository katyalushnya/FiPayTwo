import React, {useContext, useState} from 'react';
import {Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {Colors} from "../../constants/styles";
import GhostButton from "../ui/GhostButton";
import FilledButton from "../ui/FilledButton";

export default function  ModalLinkCard ({modalVisible, setModalVisible, Website, NotNow}){

    return (

        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{backgroundColor:'rgba(44,44,44,0.50)', position:'absolute',width:'100%',height:'80%'}}></View>

                <View style={{backgroundColor:'white', width:'100%', height:'50%', alignItems:'center', position:'absolute', top:'50%', borderRadius:12}}>

                    <MaterialIcons name="link" color={Colors.primary800} size={45} style={{marginTop:40}}/>

                    <Text style={{fontSize:20, fontFamily:'SourceSansProRegular', marginTop:20, width:200, alignSelf:'center', textAlign:'center'}}>Add your bank account on our website</Text>
                    <Text style={{fontSize:14, fontFamily:'SourceSansProRegular', marginTop:30, width:350, alignSelf:'center', textAlign:'center'}}>We're adding features as fast as we can. For now, you can add your account on our website.</Text>

                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <View style={{width:'90%', marginRight:20}}>
                            <FilledButton onPress={Website} color={Colors.primary800}>Go to our website</FilledButton>
                        </View>
                        <View style={{width:'90%', marginTop:-10}}>
                            <GhostButton onPress={NotNow} color={Colors.primary800}>Not now</GhostButton>
                        </View>
                    </View>

                </View>
            </Modal>

        </View>
    );

}
