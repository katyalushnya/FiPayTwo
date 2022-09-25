import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons,} from "@expo/vector-icons";
import TransactionHistory from "../../components/Authenticated/TransactionHistory";
import Charts from "../../components/Authenticated/Charts";
import {useNavigation} from "@react-navigation/native";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import {Colors} from "../../constants/styles";

export default function AccountAnalytics () {

    const navigation = useNavigation();

    function goBack(){
        navigation.goBack();
    }

        return (
            <View style={styles.container}>

                <View style={{flexDirection:'row'}}>
                    <HeaderBlackArrow onPress={goBack}>Account analytics</HeaderBlackArrow>
                    <TouchableOpacity onPress={()=>{navigation.replace("Settings")}}>
                        <Ionicons name={'search'} size={20} color={'black'} style={{marginLeft:130, marginTop:50}}/>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row'}}>
                    <View>
                        <Text style={{fontSize:16, marginLeft:20, color:Colors.primary800, marginTop:20, fontFamily:'SemiBold',}}>Day</Text>
                        <View style={{borderBottomColor: Colors.primary800, borderBottomWidth: 2, width:20,marginTop:3, marginLeft:20}}/>
                    </View>
                    <Text style={{fontSize:16, marginLeft:20, color:'#A5ABB3', marginTop:20, fontFamily:'SemiBold',}}>Week</Text>
                    <Text style={{fontSize:16,marginLeft:20, color:'#A5ABB3', marginTop:20, fontFamily:'SemiBold',}}>Month</Text>
                    <Text style={{fontSize:16, marginLeft:20, color:'#A5ABB3', marginTop:20, fontFamily:'SemiBold',}}>Year</Text>
                </View>

                <Text style={{fontSize:18, marginLeft:20, marginTop:20, fontFamily:'SemiBold',}}>Activity</Text>

                <Charts/>

                <View style={{marginLeft:20, marginTop:20, flexDirection:'row'}}>
                    <Text style={{ fontSize:18, fontFamily:'SemiBold',}}>Transaction History</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize:18, marginLeft:140, color:Colors.primary800, fontFamily:'SemiBold',}}>See all</Text>
                    </TouchableOpacity>
                </View>

                <TransactionHistory/>

                <StatusBar style="auto"/>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

});
