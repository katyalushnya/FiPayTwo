import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, Modal, SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {Colors} from "../../constants/styles";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import {useNavigation} from "@react-navigation/native";
import Line from "../../components/ui/Line";

export default function LoginSecurity () {

    const navigation = useNavigation();

    const [isEnabledFace, setIsEnabledFace]=useState(true);
    const [isEnabledRemember, setIsEnabledRemember]=useState(false);
    const [isEnabledTouch, setIsEnabledTouch]=useState(false);

    function toggleSwitchFace(){
        setIsEnabledFace(!isEnabledFace);
    }

    function toggleSwitchRemember(){
        setIsEnabledRemember(!isEnabledRemember);
    }

    function toggleSwitchTouch(){
        setIsEnabledTouch(!isEnabledTouch);
    }

    function goBack(){
        navigation.goBack();
    }

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
                <HeaderBlackArrow onPress={goBack}>Login and security</HeaderBlackArrow>

                <View style={{marginTop:10, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20}}>
                        <View style={{backgroundColor:Colors.primary100, width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                            <MaterialIcons name="person-outline" color={Colors.primary800} size={20}/>
                        </View>
                        <Text style={{fontSize:17, fontFamily:'SemiBold', marginLeft:20}}>Face ID</Text>
                        <Switch
                            trackColor={{ false: Colors.softgrey, true: Colors.primary800 }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchFace}
                            value={isEnabledFace}
                            style={{marginLeft:200}}
                        />
                    </View>

                    <Text style={{fontSize:14,color:'#858C94', fontFamily:'Regular', marginTop:10}}>(Recommended)</Text>
                    <Line/>
                </View>

                <View style={{marginTop:10, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20}}>
                        <View style={{backgroundColor:Colors.primary100, width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                            <AntDesign name="checkcircleo" color={Colors.primary800} size={20}/>
                        </View>
                        <Text style={{fontSize:17, fontFamily:'SemiBold', marginLeft:20}}>Remember me</Text>
                        <Switch
                            trackColor={{ false: Colors.softgrey, true:  Colors.primary800 }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchRemember}
                            value={isEnabledRemember}
                            style={{marginLeft:145}}
                        />
                    </View>

                    <Text style={{fontSize:14,color:'#858C94', fontFamily:'Regular', marginTop:10, width:250}}>(Not recommended if you share your device)</Text>
                    <Line/>
                </View>

                <View style={{marginTop:10, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20}}>
                        <View style={{backgroundColor:Colors.primary100, width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                            <MaterialCommunityIcons name="fingerprint" color={Colors.primary800} size={20}/>
                        </View>
                        <Text style={{fontSize:17, fontFamily:'SemiBold', marginLeft:20}}>Touch ID</Text>
                        <Switch
                            trackColor={{ false:  Colors.softgrey, true:  Colors.primary800 }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchTouch}
                            value={isEnabledTouch}
                            style={{marginLeft:186}}
                        />
                    </View>

                    <Text style={{fontSize:14,color:'#858C94', fontFamily:'Regular', marginTop:10, width:250}}>(Not recommended if you share your device)</Text>
                    <Line/>
                </View>


                <StatusBar style="auto"/>

            </SafeAreaView>
        );
}
