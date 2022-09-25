import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import DisabledButton from "../../components/ui/DisabledButton";
import {Colors} from "../../constants/styles";
import InputText from "../../components/ui/InputText";
import {useNavigation} from "@react-navigation/native";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import {cards} from "../../datas/cards";

export default function TopupMoney () {


    const data =['10', '100', '250', '500'];
    const [disabled, setDisabled] = useState(true);

    const card = cards[1].card_number;
    const [amount, setAmount] = useState('');

    const ableButton=()=>{
            if(amount==''){
                setDisabled(true);
            }
            else{
                setDisabled(false);
            }
    }

    const navigation = useNavigation();
    function goBack(){
        navigation.goBack();
    }

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
                <HeaderBlackArrow onPress={goBack}>Top up money</HeaderBlackArrow>

                <InputText>Choose card</InputText>
                <View style={{flexDirection:'row', alignItems:'center', borderColor:'black', borderWidth:1, borderRadius:10, width:'90%', height:50, marginLeft:20, marginTop:10 }}>
                    <Text style={{color:'#2C3A4B',marginLeft:20, fontSize: 15, fontFamily:'SemiBold', }}>{'VISA **** ****'+ card.substring(14, 19)}</Text>
                    <AntDesign name="caretdown" color={'#2C3A4B'} size={18} style={{marginLeft:170}}/>
                </View>

                <View style={{backgroundColor:Colors.primary100, width:'90%', height:130, marginLeft:20, marginTop:30, justifyContent:'center', borderRadius:10}}>
                    <Text style={{color: '#2C3A4B', fontSize: 15, fontFamily:'Regular', marginTop:20, marginLeft:20}}>Nominal</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color: '#2C3A4B', fontSize: 40, fontFamily:'SemiBold', margin:20}}>$</Text>
                        <TextInput style={{color: '#2C3A4B', fontSize: 40, fontFamily:'SemiBold'}} value={amount} onChangeText={text=>{
                            setAmount(text);
                            ableButton();
                        }}/>
                    </View>
                </View>

                <FlatList
                    data={data}
                    horizontal
                    style={{width:'100%'}}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{backgroundColor:Colors.primary100, marginLeft:20, width:73, height:50, borderRadius:5, marginTop:20, justifyContent:'center'}} onPress={()=>{setAmount(item); ableButton();}}>
                            <Text style={{textAlign: 'center', color: Colors.primary800, fontSize: 16, fontFamily:'SemiBold',}}>${item}</Text>
                        </TouchableOpacity>
                    )}/>

                <Text style={{color: '#2C3A4B', fontSize: 16, fontFamily:'SemiBold', position:'absolute', top:470, left:40}}>Note</Text>
                <TextInput
                    style={{fontSize: 16, fontFamily:'SemiBold', textAlignVertical: 'top', position:'absolute', top:500, left:20, borderColor:'black', borderWidth:1, borderRadius:10, width:'90%', height:120}}
                    numberOfLines={5}
                    multiline
                />

                <DisabledButton disabled={disabled}>Top up</DisabledButton>

                <StatusBar style="auto"/>

            </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        color:'#000000',
        marginLeft:20,
        fontFamily:'SemiBold',
    },
    text:{
        color:Colors.primary800,
        fontSize:27,
        fontFamily:'SemiBold',
    },
    input:{
        marginTop:5,
        borderColor:'#a5abb3',
        borderWidth:1,
        marginLeft:20,
        marginRight:20,
        borderRadius:5,
        height:50,
        paddingLeft:15,
        fontFamily:'SemiBold',
    },
});
