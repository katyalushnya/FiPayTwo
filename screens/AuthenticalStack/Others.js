import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, Modal, SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import {Colors} from "../../constants/styles";
import Line from "../../components/ui/Line";

export default function Others () {
    const [isEnabledFace, setIsEnabledFace] = useState(false);

    const navigation = useNavigation();

    function goBack(){
        navigation.goBack();
    }

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
                <HeaderBlackArrow onPress={goBack}>Others</HeaderBlackArrow>

                <View style={{marginTop:30, marginLeft:20,flexDirection:'row', width:'100%', alignItems:'center'}}>
                    <View style={{backgroundColor:Colors.primary100, width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                        <MaterialCommunityIcons name="bell" color={Colors.primary800} size={20}/>
                    </View>
                    <Text style={{fontSize:17, fontFamily:'SemiBold', marginLeft:20}}>Notification</Text>
                    <Switch
                        trackColor={{ false: Colors.softgrey, true: Colors.primary800 }}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={()=>setIsEnabledFace(!isEnabledFace)}
                        value={isEnabledFace}
                        style={{marginLeft:170}}
                    />
                </View>

                <Line/>

                <View style={{marginTop:30, marginLeft:20,flexDirection:'row', width:'100%', alignItems:'center'}}>
                    <View style={{backgroundColor:Colors.primary100, width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                        <MaterialCommunityIcons name="fingerprint" color={Colors.primary800} size={20}/>
                    </View>
                    <Text style={{fontSize:17, fontFamily:'SemiBold', marginLeft:20}}>Fingerprint</Text>
                    <AntDesign name="right" color={Colors.primary800} size={18} style={{marginLeft:200}}/>
                </View>

                <Line/>

                <TouchableOpacity>
                    <View style={{marginTop:30, marginLeft:20,flexDirection:'row', width:'100%', alignItems:'center'}}>
                        <View style={{backgroundColor:Colors.primary100, width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                            <MaterialCommunityIcons name="google-translate" color={Colors.primary800} size={20}/>
                        </View>
                        <Text style={{fontSize:17, fontFamily:'SemiBold', marginLeft:20}}>Language</Text>
                        <Text style={{ color:Colors.title01, fontSize:17, fontFamily:'ProRegular', marginLeft:140}}>English</Text>
                        <AntDesign name="right" color={Colors.primary800} size={18} style={{marginLeft:20}}/>
                    </View>
                </TouchableOpacity>

                <Line/>

                <View style={{marginTop:30, marginLeft:20,flexDirection:'row', width:'100%', alignItems:'center'}}>
                    <View style={{backgroundColor:Colors.primary100, width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                        <Image source={require('../../assets/usd-coin.png')}/>
                    </View>
                    <Text style={{fontSize:17, fontFamily:'SemiBold', marginLeft:20}}>Fast Payment</Text>
                    <AntDesign name="right" color={Colors.primary800} size={18} style={{marginLeft:187}}/>
                </View>

                <StatusBar style="auto"/>

            </SafeAreaView>
        );

}

