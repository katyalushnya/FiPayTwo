import {StatusBar} from 'expo-status-bar';
import Moment from 'moment';
import * as React from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {VictoryPie, VictoryLabel} from "victory-native";
import Svg from "react-native-svg";
import CalendarPicker from 'react-native-calendar-picker';
import {useState} from "react";
import {Colors} from "../../constants/styles";
import FlatButton from "../../components/ui/FlatButton";
import TransactionHistory from "../../components/Authenticated/TransactionHistory";
import {useNavigation} from "@react-navigation/native";
import FilterDate from "../../components/Authenticated/FilterDate";
import DiagramPie from "../../components/Authenticated/DiagramPie";

export default function StaticsDiagram () {

    const navigation = useNavigation();

    const incomes = 200.20;
    const outcomes = 160.80;

    const [modalVisible, setModalVisible]=useState(false);
    const [selectedStartDate, setSelectedStartDate]=useState(null);
    const [selectedEndDate, setSelectedEndDate]=useState(null);
    const [openModalCalendar, setOpenModalCalendar]=useState(false);
    onDateChange = onDateChange.bind(this);

    const minDate = new Date(2017, 6, 3);
    const maxDate = new Date(); // Today
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : 'November 20, 2021';
    const endDate = selectedEndDate ? selectedEndDate.toString() : 'December 20, 2021';

    function onDateChange(date, type) {
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedStartDate(date);
            setSelectedEndDate(null);
        }
    }

        return (
            <View style={styles.container}>

                <View style={{flexDirection: 'row', backgroundColor: Colors.primary800, width: '100%', height: '30%'}}>
                    <Text style={styles.title}>Statistics</Text>
                </View>


                <TouchableOpacity style={{position: 'absolute', top: 70, left: 270,}} onPress={()=>{setModalVisible(!modalVisible)}}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderWidth: 1,
                        borderColor: 'white',
                        borderRadius: 7,
                        width: 100,
                        height: 30
                    }}>
                        <Text style={{fontSize: 16, color: '#fff', fontFamily: 'SemiBold'}}>This
                            week</Text>
                        <MaterialIcons name="arrow-drop-down" color={'#fff'} size={20}/>
                    </View>
                </TouchableOpacity>

                <View style={styles.block}>
                    <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 25,}}>
                        <View>
                            <Text style={{
                                fontSize: 16,
                                color: Colors.softgrey,
                                fontFamily: 'Regular'
                            }}>Incomes</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                <Text style={{
                                    fontSize: 27,
                                    fontFamily: 'SemiBold'
                                }}>${incomes}</Text>
                                <MaterialIcons name="arrow-downward" color={Colors.primary800} size={20}
                                               style={{marginLeft: 10}}/>
                            </View>
                        </View>
                        <View style={{marginLeft: 90}}>
                            <Text style={{
                                fontSize: 16,
                                color: Colors.softgrey,
                                fontFamily: 'Regular'
                            }}>Outcomes</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                <Text style={{
                                    fontSize: 27,
                                    fontFamily: 'SemiBold'
                                }}>${outcomes}</Text>
                                <MaterialIcons name="arrow-upward" color={Colors.red} size={20}
                                               style={{marginLeft: 10}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        borderBottomColor: '#fff',
                        borderBottomWidth: 1,
                        width: '87%',
                        marginTop: 20,
                        marginLeft: 20
                    }}/>
                    <View style={{marginTop: -110}}>
                        <TouchableOpacity onPress={() => {
                            navigation.replace("Tabs")
                        }}>
                            <DiagramPie/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginLeft: 20, marginTop: 300, flexDirection: 'row'}}>
                    <Text style={{fontSize: 18, fontFamily: 'SemiBold',}}>Transaction History</Text>
                    <View style={{marginLeft:160}}><FlatButton>See all</FlatButton></View>
                </View>

                <TransactionHistory/>

                <FilterDate modalVisible={modalVisible} openModalCalendar={openModalCalendar} setOpenModalCalendar={setOpenModalCalendar} setModalVisible={setModalVisible} startDate={startDate} endDate={endDate} minDate={minDate} maxDate={maxDate} onDateChange={onDateChange}/>

                <StatusBar style="auto"/>
            </View>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 23,
        color: '#ffffff',
        marginTop: 70,
        marginLeft: 20,
        fontFamily: 'SemiBold',
    }, block: {
        position: 'absolute',
        top: 120,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: Colors.primary800,
        borderRadius: 10,
        height: 400,
        width: '90%',
        marginLeft: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14.78,
        elevation: 22,
    },
});
