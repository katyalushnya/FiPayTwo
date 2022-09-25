import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, Modal, SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import Line from "../../components/ui/Line";
import {Colors} from "../../constants/styles";

export default function  NotificationSettings () {

    const navigation = useNavigation();

    const [isEnabledBuy, setIsEnabledBuy]=useState(true);
    const [isEnabledReceive, setIsEnabledReceive]=useState(true);
    const [isEnabledSend, setIsEnabledSend]=useState(true);
    const [isEnabledRequest, setIsEnabledRequest]=useState(true);
    const [isEnabledPromo, setIsEnabledPromo]=useState(false);
    const [isEnabledService, setIsEnabledService]=useState(false);


    function goBack(){
        navigation.goBack();
    }

    return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
                <HeaderBlackArrow onPress={goBack}>Notification Settings</HeaderBlackArrow>

                <Text style={{fontSize:15, fontFamily:'Regular', marginLeft:20, marginTop:30}}>Notify me when</Text>

                <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%',marginTop:20, marginLeft:20}}/>

                <View style={{marginTop:20, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                        <Text style={{fontSize:15, fontFamily:'SemiBold'}}>Buy something</Text>
                        <Switch
                            trackColor={{ false: Colors.softgrey, true: Colors.primary800 }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setIsEnabledBuy(!isEnabledBuy)}
                            value={isEnabledBuy}
                            style={{marginLeft:230}}
                        />
                    </View>
                    <Line/>
                </View>
                <View style={{marginTop:20, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                        <Text style={{fontSize:15, fontFamily:'SemiBold'}}>Receive money</Text>
                        <Switch
                            trackColor={{ false: Colors.softgrey, true: Colors.primary800 }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setIsEnabledReceive(!isEnabledReceive)}
                            value={isEnabledReceive}
                            style={{marginLeft:230}}
                        />
                    </View>
                    <Line/>
                </View>
                <View style={{marginTop:20, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                        <Text style={{fontSize:15, fontFamily:'SemiBold'}}>Send payments</Text>
                        <Switch
                            trackColor={{ false: Colors.softgrey, true: Colors.primary800 }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setIsEnabledSend(!isEnabledSend)}
                            value={isEnabledSend}
                            style={{marginLeft:230}}
                        />
                    </View>

                    <Line/>
                </View>
                <View style={{marginTop:20, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                        <Text style={{fontSize:15, fontFamily:'SemiBold'}}>Receive a money request</Text>
                        <Switch
                            trackColor={{ false: Colors.softgrey, true: Colors.primary800 }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setIsEnabledRequest(!isEnabledRequest)}
                            value={isEnabledRequest}
                            style={{marginLeft:170}}
                        />
                    </View>

                    <Line/>
                </View>
                <View style={{marginTop:20, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                        <Text style={{fontSize:15, fontFamily:'SemiBold'}}>New promo availables</Text>
                        <Switch
                            trackColor={{ false: Colors.softgrey, true: Colors.primary800 }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setIsEnabledPromo(!isEnabledPromo)}
                            value={isEnabledPromo}
                            style={{marginLeft:185}}
                        />
                    </View>

                    <Line/>
                </View>
                <View style={{marginTop:20, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                        <Text style={{fontSize:15, fontFamily:'SemiBold'}}>New service availables</Text>
                        <Switch
                            trackColor={{ false: Colors.softgrey, true: Colors.primary800 }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setIsEnabledService(!isEnabledService)}
                            value={isEnabledService}
                            style={{marginLeft:180}}
                        />
                    </View>
                    <Line/>
                </View>

                <StatusBar style="auto"/>

            </SafeAreaView>
        );
}
