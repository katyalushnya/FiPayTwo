import React, { useState } from 'react'
import {View, Modal, Text, TouchableOpacity} from 'react-native'
import {Colors} from "../../constants/styles";
import Moment from "moment";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import InputText from "../ui/InputText";
import Button from "../ui/Button";
import GlobalStyle from "../ui/GlobalStyle";
import FilledButton from "../ui/FilledButton";

const FilterDate = ({modalVisible, openModalCalendar, setOpenModalCalendar, setModalVisible, startDate, endDate, minDate, maxDate, onDateChange}) => {

    function onApply(){
        setModalVisible(false);
    }
    function onApplyClose(){
        setOpenModalCalendar(false);
    }
    return (
        <View style={{flex:1,}}>

            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                {modalVisible ? (
                    <View style={{backgroundColor:'rgba(44,44,44,0.50)', position:'absolute',width:'100%',height:'80%', top:0, left:0}}></View>
                ):null}

                { !openModalCalendar &&
                    <View style={{backgroundColor:'white', width:'100%', height:400, alignItems:'center', position:'absolute', top:'60%', borderRadius:12}}>
                        <Text style={{fontSize: 20, fontFamily: 'SemiBold',marginTop:20}}>Filter</Text>

                        <View style={{width:'90%'}}>

                            <InputText>From</InputText>
                            <View style={{justifyContent:'center', width:'100%', height:50,borderWidth:1, borderRadius:7, marginTop:10, marginBottom:10}}>
                                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{setOpenModalCalendar(true)}}>
                                    <Text style={{fontSize: 16, fontFamily: 'SemiBold', width:250, marginLeft:20, marginRight:80}}>{Moment(startDate).format('MMMM DD, YYYY')}</Text>
                                    <MaterialCommunityIcons name="calendar-text" color={'grey'} size={20}/>
                                </TouchableOpacity>
                            </View>

                            <InputText>To</InputText>
                            <View style={{justifyContent:'center', width:'100%', height:50,borderWidth:1, borderRadius:7, marginTop:10}}>
                                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{setOpenModalCalendar(true)}}>
                                    <Text style={{fontSize: 16, fontFamily: 'SemiBold', width:250, marginLeft:20, marginRight:80}}>{Moment(endDate).format('MMMM DD, YYYY')}</Text>
                                    <MaterialCommunityIcons name="calendar-text" color={'grey'} size={20}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{justifyContent:'center', width:'90%'}}>
                            <FilledButton onPress={onApply}>Apply</FilledButton>
                        </View>
                    </View>
                }

                {openModalCalendar &&
                    <View style={{backgroundColor:'white', width:'100%', height:500, alignItems:'center', position:'absolute', top:'40%', borderRadius:12}}>

                        <View style={{flexDirection:'row', marginTop:20,}}>
                            <View style={{alignItems:'center', width:150, height:50,borderWidth:1, borderRadius:7, borderColor:Colors.primary800,flexDirection:'row'}}>
                                <Text style={{fontSize: 16, fontFamily: 'SemiBold', marginLeft:20, color:Colors.primary800}}>{Moment(startDate).format('MMM DD, YYYY')}</Text>
                                <AntDesign name="caretdown" color={Colors.primary800} size={18}/>
                            </View>
                            <View style={{marginLeft:20,alignItems:'center', width:150, height:50,borderWidth:1, borderColor:Colors.primary800,borderRadius:7, flexDirection:'row'}}>
                                <Text style={{fontSize: 16, fontFamily: 'SemiBold', marginLeft:20, color:Colors.primary800}}>{Moment(endDate).format('MMM DD, YYYY')}</Text>
                                <AntDesign name="caretdown" color={Colors.primary800} size={18}/>
                            </View>
                        </View>
                        <View style={{marginTop:30}}>
                            <CalendarPicker
                                startFromMonday={true}
                                allowRangeSelection={true}
                                minDate={minDate}
                                maxDate={maxDate}
                                todayBackgroundColor="#f2e6ff"
                                selectedDayColor="#6D5FFD33"
                                selectedDayTextColor="#FFFFFF"
                                onDateChange={onDateChange}
                                textStyle={{fontFamily:'Regular'}}
                                selectedDayTextStyle={{color:'black', fontFamily:'SemiBold'}}
                                scrollable={true}
                            />
                        </View>

                        <View style={{justifyContent:'center', width:'90%', marginTop:-30}}>
                            <FilledButton onPress={onApplyClose}>Apply</FilledButton>
                        </View>
                    </View>
                }
            </Modal>
        </View>
    )
}

export default FilterDate;
