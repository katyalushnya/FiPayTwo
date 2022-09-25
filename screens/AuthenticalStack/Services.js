import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import Line from "../../components/ui/Line";
import {Colors} from "../../constants/styles";

export default function Services () {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack();
    }

            return (
                <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
                    <HeaderBlackArrow onPress={goBack}>Services</HeaderBlackArrow>

                    <TouchableOpacity onPress={()=>{navigation.push("RecieveMoney")}}>
                        <View style={{backgroundColor:Colors.primary100, marginTop:20, marginLeft:20, width:'90%', height:80, justifyContent:'center',borderRadius:10}}>
                            <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                                <View style={{backgroundColor:Colors.primary100, width:80, height:80, justifyContent:'center', alignItems:'center', borderTopLeftRadius:10, borderBottomLeftRadius:10}}>
                                    <MaterialCommunityIcons name="account-supervisor-circle" color={Colors.primary800} size={25}/>
                                </View>
                                <View>
                                    <Text style={{fontSize:15, fontFamily:'SemiBold', marginLeft:20}}>Add or Manage</Text>
                                    <Text style={{fontSize:15, fontFamily:'SemiBold', marginLeft:20}}>Authorized Users</Text>
                                </View>
                                <AntDesign name="right" color={Colors.primary800} size={18} style={{marginLeft:100}}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Line/>
                    <TouchableOpacity onPress={()=>{navigation.push("ManageMoney")}}>
                        <View style={{backgroundColor:'#FFB8001A', marginTop:20, marginLeft:20, width:'90%', height:80, justifyContent:'center',borderRadius:10}}>
                            <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                                <View style={{backgroundColor:'#FFB8001A', width:80, height:80, justifyContent:'center', alignItems:'center', borderTopLeftRadius:10, borderBottomLeftRadius:10}}>
                                    <MaterialCommunityIcons name="credit-card-outline" color={Colors.yellow} size={25}/>
                                </View>
                                <Text style={{fontSize:15, fontFamily:'SemiBold', marginLeft:20}}>Manage Cards & Devices</Text>
                                <AntDesign name="right" color={Colors.yellow} size={18} style={{marginLeft:53}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Line/>
                    <TouchableOpacity onPress={()=>{navigation.push('DetailBalance')}}>
                        <View style={{backgroundColor:'#1867FF1A', marginTop:20, marginLeft:20, width:'90%', height:80, justifyContent:'center',borderRadius:10}}>
                            <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                                <View style={{backgroundColor:'#1867FF1A', width:80, height:80, justifyContent:'center', alignItems:'center', borderTopLeftRadius:10, borderBottomLeftRadius:10}}>
                                    <MaterialCommunityIcons name="crop" color={Colors.blue} size={20}/>
                                </View>
                                <Text style={{fontSize:15, fontFamily:'SemiBold', marginLeft:20}}>Balance Transfer</Text>
                                <AntDesign name="right" color={Colors.blue} size={18} style={{marginLeft:100}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Line/>
                    <TouchableOpacity onPress={()=>{navigation.push("Home")}}>
                        <View style={{backgroundColor:'#FF18431A', marginTop:20, marginLeft:20, width:'90%', height:80, justifyContent:'center',borderRadius:10}}>
                            <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                                <View style={{backgroundColor:'#FF18431A', width:80, height:80, justifyContent:'center', alignItems:'center', borderTopLeftRadius:10, borderBottomLeftRadius:10}}>
                                    <MaterialIcons name="monetization-on" color={Colors.red} size={25}/>
                                </View>
                                <Text style={{fontSize:15, fontFamily:'SemiBold', marginLeft:20}}>Create or Change Cash Pin</Text>
                                <AntDesign name="right" color={Colors.red} size={18} style={{marginLeft:35}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Line/>
                    <TouchableOpacity onPress={()=>{navigation.push("TopupMoney")}}>
                        <View style={{backgroundColor:Colors.primary100, marginTop:20, marginLeft:20, width:'90%', height:80, justifyContent:'center',borderRadius:10}}>
                            <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                                <View style={{backgroundColor:Colors.primary100, width:80, height:80, justifyContent:'center', alignItems:'center', borderTopLeftRadius:10, borderBottomLeftRadius:10}}>
                                    <MaterialIcons name="money" color={Colors.primary800} size={25}/>
                                </View>
                                <View>
                                    <Text style={{fontSize:15, fontFamily:'SemiBold', marginLeft:20}}>Credit Line Increase</Text>
                                </View>
                                <AntDesign name="right" color={Colors.primary800} size={18} style={{marginLeft:75}}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <StatusBar style="auto"/>

                </SafeAreaView>
            );


}
