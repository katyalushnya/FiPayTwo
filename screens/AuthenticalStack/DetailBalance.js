import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    FlatList,
    Image,
    Modal,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import ChartGraph from "../../components/Authenticated/ChartGraph";
import {useNavigation} from "@react-navigation/native";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import {Colors} from "../../constants/styles";


export default function DetailScreen () {
    const data = 1299.60;
    const balance_detail=[{expense:389, pending:238, income:584}];

    const navigation = useNavigation();

    function goBack(){
        navigation.goBack();
    }

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>

                <HeaderBlackArrow onPress={goBack}>Detail balance</HeaderBlackArrow>


                <TouchableOpacity onPress={()=>{navigation.push("CurrenceBalance")}}>
                    <View style={{backgroundColor:Colors.primary100, width:'90%', height:150, marginLeft:20, marginTop:20, alignItems:'center', justifyContent:'center', borderRadius:10}}>
                        <Text style={{color: Colors.primary800, fontSize: 40, fontFamily:'SemiBold',}}>$ {data}</Text>
                        <Text style={{color: '#2C3A4B', fontSize: 15, fontFamily:'Regular', marginTop:20}}>US Dollar balance</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{ fontSize:18, fontFamily:'SemiBold', marginTop:30, marginLeft:20}}>Activity graph</Text>
                <View>
                    <ChartGraph/>
                </View>

                <View style={{marginLeft:20, marginTop:30, flexDirection:'row'}}>
                    <Text style={{ fontSize:18, fontFamily:'SemiBold', }}>Balance detail</Text>
                    <TouchableOpacity onPress={()=>{navigation.push("BudgetCalculation")}}>
                        <Text style={{fontSize:18, fontFamily:'SemiBold', marginLeft:210, color:Colors.primary800}}>See all</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} style={{flexDirection:'row', marginLeft:20, marginTop:20}}>
                    <TouchableOpacity onPress={()=>{navigation.push("Expenses")}}>
                        <View style={{width:140, height:200, backgroundColor:Colors.primary800, justifyContent:'center', borderRadius:10}}>
                            <Text style={{color:'#fff', fontSize:16, fontFamily:'Regular', marginLeft:20,marginTop:10}}>Expense</Text>
                            <Text style={{color:'#fff', fontSize:27, fontFamily:'SemiBold',marginLeft:20}}>$ {balance_detail[0].expense}</Text>
                            <Image source={require('../../assets/white_path.png')} style={{marginTop:20}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{width:140, height:200, backgroundColor:Colors.yellow, justifyContent:'center', borderRadius:10, marginLeft:10}}>
                        <Text style={{color:'#fff', fontSize:16, fontFamily:'Regular', marginLeft:20,marginTop:10}}>Pending</Text>
                        <Text style={{color:'#fff', fontSize:27, fontFamily:'SemiBold',marginLeft:20}}>$ {balance_detail[0].pending}</Text>
                        <Image source={require('../../assets/white_path.png')} style={{marginTop:20}}/>
                    </View>

                    <View style={{width:140, height:200, backgroundColor:Colors.red, justifyContent:'center', borderRadius:10, marginLeft:10}}>
                        <Text style={{color:'#fff', fontSize:16, fontFamily:'Regular', marginLeft:20,marginTop:10}}>Income</Text>
                        <Text style={{color:'#fff', fontSize:27, fontFamily:'SemiBold',marginLeft:20}}>$ {balance_detail[0].income}</Text>
                        <Image source={require('../../assets/white_path.png')} style={{marginTop:20}}/>
                    </View>
                </ScrollView>

                <StatusBar style="auto"/>
            </SafeAreaView>
        );
}
