import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from "react";
import {contact} from "../../datas/contacts";
import {Colors} from "../../constants/styles";
import {useNavigation} from "@react-navigation/native";
import {cards} from "../../datas/cards";
import InputText from "../../components/ui/InputText";
import DisabledButton from "../../components/ui/DisabledButton";


export default function AddRecipient() {

    const [disabled, setDisabled] = useState(true);

    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('VISA **** ****' + cards[0].card_number.substring(14, 19));
    const [items, setItems] = useState([
        {
            label: 'VISA **** ****' + cards[0].card_number.substring(14, 19),
            value: 'VISA **** ****' + cards[0].card_number.substring(14, 19)
        },
        {
            label: 'VISA **** ****' + cards[1].card_number.substring(14, 19),
            value: 'VISA **** ****' + cards[1].card_number.substring(14, 19)
        }
    ]);

    const renderItem = ({item}) => {
        return (
            <View style={{alignItems: 'center', marginLeft: 15}}>
                <ImageBackground source={item.photo}>
                    <View style={{
                        backgroundColor: Colors.primary100,
                        width: 60,
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10
                    }}></View>
                </ImageBackground>
                <Text style={{
                    fontSize: 14,
                    color: '#2C3A4B',
                    marginTop: 3,
                    fontFamily: 'Regular',
                }}>{item.name.substring(0, 5)}</Text>
            </View>
        )
    }

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/Waves.png')} style={styles.image}>
                <View style={{justifyContent: 'flex-start', height: 550}}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => {goBack}}>
                            <Image source={require('../../assets/arrow-back-white.png')}
                                   style={{marginLeft: 20, marginTop: 70}}/>
                        </TouchableOpacity>
                        <Text style={{
                            marginLeft: 20,
                            marginTop: 70,
                            fontSize: 20,
                            fontFamily: 'SemiBold',
                            color: 'white'
                        }}>Transfer money</Text>
                    </View>

                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 150,
                        left: 120
                    }}>
                        <Text style={{color: 'white', fontSize: 35, fontFamily: 'SemiBold',}}>${cards[0].balance}</Text>
                        <Text style={{color: 'white', fontSize: 15, marginTop: 10, fontFamily: 'Regular',}}>US Dollar
                            balance</Text>
                    </View>
                </View>
            </ImageBackground>

            <View style={{backgroundColor: 'white', justifyContent: 'flex-start', height: 220}}>
            </View>

            <View style={{
                position: 'absolute',
                backgroundColor: 'white',
                height: 400,
                width: '100%',
                top: 300,
                borderRadius: 15
            }}>
                <View style={{
                    borderBottomColor: '#d3d5d5',
                    borderBottomWidth: 3,
                    width: 30,
                    marginLeft: '47%',
                    marginTop: 20,
                }}></View>
                <Text style={{fontSize: 20, marginTop: 20, marginLeft: 20, fontFamily: 'SemiBold',}}>Select
                    recipient</Text>

                <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 20}}>
                    <TouchableOpacity style={{alignItems: 'center'}}>
                        <View style={{
                            backgroundColor: Colors.primary100,
                            width: 60,
                            height: 60,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}>
                            <Text style={{color: Colors.primary800, fontSize: 25}}>+</Text>
                        </View>
                        <Text style={{fontSize: 14, color: '#2C3A4B', marginTop: 3, fontFamily: 'Regular',}}>Add</Text>
                    </TouchableOpacity>

                    <FlatList data={contact} horizontal renderItem={renderItem}/>

                </View>
                <InputText>Select card / account</InputText>

                <DropDownPicker
                    style={{
                        marginLeft: 20,
                        width: '90%',
                        marginTop: 10,
                        fontFamily: 'SemiBold',
                        fontSize: 16,
                        paddingLeft: 20
                    }}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={(text) => {
                        setOpen(text)
                    }}
                    setValue={(text) => {
                        setValue(text)
                    }}
                    setItems={(text) => {
                        setItems(text)
                    }}
                />

                <Text style={styles.textinput}>Message</Text>
                <TextInput
                    style={{
                        marginLeft: 20,
                        marginTop: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 20,
                        fontSize: 16,
                        fontFamily: 'SemiBold',
                        textAlignVertical: 'top',
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 10,
                        width: '90%',
                        height: 80
                    }}
                    numberOfLines={5}
                    multiline
                    value={message}
                    onChangeText={text => {
                        setMessage(text)
                    }}
                />

                <DisabledButton disabled={disabled}>Pay now</DisabledButton>

            </View>
            <StatusBar style="auto"/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6D5FFD',
        justifyContent: 'center',
    },
    footer: {
        marginTop: 20,
        backgroundColor: '#ffffff',
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        borderRadius: 15,
    },
    textinput: {
        fontSize: 16,
        color: '#2C3A4B',
        marginTop: 30,
        marginLeft: 40,
        marginRight: 20,
        fontFamily: 'SemiBold',
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        fontFamily: 'SemiBold',
    },
});
