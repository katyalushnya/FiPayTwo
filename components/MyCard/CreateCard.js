import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import DatePicker from 'react-native-datepicker';
import InputText from "../ui/InputText";
import {Colors} from "../../constants/styles";

const CreateCard = () => {

    const [date, setDate] = useState('12-09-2022');

    return (
        <View style={{marginLeft: 20, marginTop: 100, backgroundColor: '#fff'}}>
            <Text style={{fontSize: 18, fontFamily: 'SemiBold',}}>Choose Style</Text>

            <View style={{marginLeft: -20, marginTop: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
                    <Image source={require('../../assets/styleCard/Style.png')} style={{}}/>
                    <Image source={require('../../assets/styleCard/Style-1.png')} style={{}}/>
                    <Image source={require('../../assets/styleCard/Style-2.png')} style={{}}/>
                    <Image source={require('../../assets/styleCard/Style-3.png')} style={{}}/>
                </View>
            </View>

            <View style={{marginLeft: -20, marginTop: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
                    <Image source={require('../../assets/styleCard/Style-5.png')} style={{}}/>
                    <Image source={require('../../assets/styleCard/Style-6.png')} style={{}}/>
                    <Image source={require('../../assets/styleCard/Style-7.png')} style={{}}/>
                    <Image source={require('../../assets/styleCard/Style-4.png')} style={{}}/>
                </View>
            </View>

            <Text style={{fontSize: 18, fontFamily: 'SemiBold', marginTop: 30}}>Details information</Text>
            <View>
                <InputText>Name on card</InputText>
                <TextInput style={styles.input} maxLength={16}/>
                <InputText>Card Number</InputText>
                <TextInput style={styles.input}/>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <View style={{width: '60%'}}>
                        <InputText>Expired Date</InputText>
                        <View>
                            <DatePicker
                                style={{
                                    borderRadius: 7,
                                    borderWidth: 1,
                                    borderColor: Colors.softgrey,
                                    width: 220,
                                    height: 50,
                                    marginTop: 5,
                                    justifyContent: 'center'
                                }}
                                date={date} //initial date from state
                                mode="date" //The enum of date, datetime and time
                                format="MMMM DD, YYYY"
                                maxDate="01-01-2023"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                iconComponent={<MaterialCommunityIcons name="calendar-text" color={'grey'} size={20}/>}
                                onDateChange={(date) => {
                                    setDate(date);
                                }}
                            />
                        </View>
                    </View>
                    <View style={{width: '33%', marginLeft: '3%'}}>
                        <InputText>CVV</InputText>
                        <TextInput style={styles.input} maxLength={3}/>
                    </View>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 100,
        width: '95%',
        borderRadius: 7,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.primary800,
        borderWidth: 2,
    },
    textinput: {
        fontSize: 16,
        color: 'gray',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontFamily: 'SemiBold',
    },
    input: {
        marginTop: 5,
        borderColor: '#a5abb3',
        borderWidth: 1,
        marginRight: 20,
        borderRadius: 5,
        width: '95%',
        height: 50,
        paddingLeft: 15,
        fontFamily: 'SemiBold',
        justifyContent: 'center'
    },
});

export default CreateCard;
