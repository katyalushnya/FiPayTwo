import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import {useNavigation} from "@react-navigation/native";
import InputText from "../../components/ui/InputText";
import {contact} from "../../datas/contacts";
import DisabledButton from "../../components/ui/DisabledButton";
import {Colors} from "../../constants/styles";
import GhostButton from "../../components/ui/GhostButton";
import {cards} from "../../datas/cards";
import DropDownPicker from "react-native-dropdown-picker";

export default function TransferMoney ({route}) {

    const card = cards[0].card_number;
    const [amount, setAmount] = useState('');
    const data =['10', '100', '250', '500'];
    const [disabled, setDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('VISA **** ****'+ cards[0].card_number.substring(14, 19));
    const [items, setItems] = useState([
        {label: 'VISA **** ****'+ cards[0].card_number.substring(14, 19), value: 'VISA **** ****'+ cards[0].card_number.substring(14, 19)},
        {label: 'VISA **** ****'+cards[1].card_number.substring(14, 19), value: 'VISA **** ****'+ cards[1].card_number.substring(14, 19)}
    ]);

    const {id} = route.params || 0;

    const ableButton=()=>{
            if(amount===''){
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

    function Successful(){
        navigation.push("SuccessfulTransfer", {card_value: value, id: id,  amount: amount, message: message});
    }

    function AddRecipient(){
        navigation.push('AddRecipient');
    }

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
                <HeaderBlackArrow onPress={goBack}>Transfer money</HeaderBlackArrow>

                <InputText>Choose card</InputText>
                <DropDownPicker
                    style={{marginLeft:20, width: '90%', marginTop:10, fontFamily:'SemiBold', fontSize:16, paddingLeft:20}}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={(text)=>{setOpen(text)}}
                    setValue={(text)=>{setValue(text)}}
                    setItems={(text)=>{setItems(text)}}
                />

                <InputText>Amount</InputText>
                <TextInput style={{borderColor:'black', paddingRight:20, paddingLeft:20,borderWidth:1, borderRadius:10, width:'90%', height:50, marginLeft:20, marginTop:10, color: '#2C3A4B', fontSize: 20, fontFamily:'Regular'}} value={amount} onChangeText={text=>{
                    setAmount(text);
                    ableButton();
                }}/>

                <FlatList
                    data={data}
                    horizontal
                    style={{width:'100%'}}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{backgroundColor:Colors.primary100, marginLeft:20, width:73, height:50, borderRadius:5, marginTop:20, justifyContent:'center'}} onPress={()=>{setAmount(item); ableButton();}}>
                            <Text style={{textAlign: 'center', color: Colors.primary800, fontSize: 16, fontFamily:'SemiBold',}}>${item}</Text>
                        </TouchableOpacity>
                    )}/>

                <Text style={{color: '#2C3A4B', fontSize: 16, fontFamily:'SemiBold', position:'absolute', top:390, left:40}}>Message</Text>
                <TextInput
                    style={{paddingLeft:20, paddingRight:20, paddingTop:20,fontSize: 16, fontFamily:'SemiBold', textAlignVertical: 'top', position:'absolute', top:420, left:20, borderColor:'black', borderWidth:1, borderRadius:10, width:'90%', height:80}}
                    numberOfLines={5}
                    multiline
                    value={message}
                    onChangeText={text=>{setMessage(text)}}
                />

                <View style={{position:'absolute', top:520, backgroundColor:Colors.yellow, width:40, height:40, borderRadius:30, alignItems:'center', justifyContent:'center', marginLeft:200}}>
                    <AntDesign name="caretdown" color={'#fff'} size={25} style={{}}/>
                </View>

                <View style={{marginLeft: 20, flexDirection: 'row', position:'absolute', top:570, alignItems:'center'}}>
                    <Image source={contact[id].photo} style={{width: 60, height: 60, borderRadius: 50,}}/>
                    <View style={{marginLeft: 20,}}>
                        <Text style={{fontFamily: 'SemiBold', fontSize: 15,}}>{contact[id].name} </Text>
                        <Text style={{color: '#6D7580', fontFamily: 'SemiBold', fontSize: 12, marginTop: 5}}>{'**** ****'+ contact[id].card_number.substring(14, 19)}</Text>
                    </View>
                </View>

                <View style={{width:'90%', marginLeft:20}}>
                    <GhostButton color={Colors.primary800} onPress={AddRecipient}>Add recipient</GhostButton>
                </View>

                <DisabledButton disabled={disabled} onPress={Successful}>Transfer</DisabledButton>

                <StatusBar style="auto"/>
            </SafeAreaView>
        );
}
