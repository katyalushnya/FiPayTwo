import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {FontAwesome5, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

import HeaderBlackArrow from "../../../components/ui/HeaderBlackArrow";
import ListContacts from "../../../components/Authenticated/ListContacts";
import {useNavigation} from "@react-navigation/native";
import {Colors} from "../../../constants/styles";
import GhostButton from "../../../components/ui/GhostButton";


export default function SendMoney () {

    const navigation = useNavigation();

    function goBack(){
        navigation.replace('Tabs');

    }
    function goServices(){
        navigation.push('Services');
    }

    function sendMoneyContact(){
        //navigation.push("TransferMoney", {contact_id: item.id})
    }

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
                <HeaderBlackArrow onPress={goBack}>Send money</HeaderBlackArrow>

                <View style={{flexDirection:'row', backgroundColor:'#F4F6F9', width:'90%', marginLeft:20, marginRight:20, marginTop:40, borderRadius:7, height:45, alignItems:'center'}}>
                    <TouchableOpacity>
                        <Text style={{marginLeft:20, fontSize:16, fontFamily:'Regular'}}>Search</Text>
                    </TouchableOpacity>
                    <MaterialIcons name="search" color={Colors.softgrey} size={25} style={{marginLeft:280}}/>
                </View>

                <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20, justifyContent:'space-between', paddingHorizontal:20}}>
                    <View style={{alignItems:'center'}}>
                        <View style={{backgroundColor:Colors.primary100, width:80, height:80, justifyContent:'center', alignItems:'center', borderRadius:18, borderBottomLeftRadius:10}}>
                            <MaterialIcons name="phone" color={Colors.primary800} size={25}/>
                        </View>
                        <Text style={{fontFamily:'SemiBold', marginTop:5}}>Mobile</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <View style={{backgroundColor:'#FFB8001A', width:80, height:80, justifyContent:'center', alignItems:'center', borderRadius:18, borderBottomLeftRadius:10}}>
                            <MaterialCommunityIcons name="wifi" color={Colors.yellow} size={25}/>
                        </View>
                        <Text style={{fontFamily:'SemiBold', marginTop:5}}>Wifi</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <View style={{backgroundColor:'#1867FF1A', width:80, height:80, justifyContent:'center', alignItems:'center', borderRadius:18, borderBottomLeftRadius:10}}>
                            <MaterialCommunityIcons name="wallet" color={Colors.blue} size={25}/>
                        </View>
                        <Text style={{fontFamily:'SemiBold', marginTop:5}}>Wallet</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <View style={{backgroundColor:'#FF18431A', width:80, height:80, justifyContent:'center', alignItems:'center', borderRadius:18, borderBottomLeftRadius:10}}>
                            <FontAwesome5 name="shopping-cart" color={Colors.red} size={25}/>
                        </View>
                        <Text style={{fontFamily:'SemiBold', marginTop:5}}>Shop</Text>
                    </View>
                </View>

                <View style={{marginLeft:20, marginRight:20}}>
                <GhostButton onPress={goServices} color={Colors.primary800}>See all services</GhostButton>
                </View>
                <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%', marginLeft:20, marginTop:20, marginRight:20}}/>

                <TouchableOpacity style={{marginLeft:20, marginTop:20, }} onPress={()=>{navigation.push("Contacts")}}>
                    <Text style={{fontSize:20, fontFamily:'SemiBold'}}>Contact</Text>
                </TouchableOpacity>

                <ListContacts sendMoney={sendMoneyContact}/>

                <StatusBar style="auto"/>
            </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
