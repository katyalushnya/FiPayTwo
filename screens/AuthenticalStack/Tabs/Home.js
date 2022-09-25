import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';

import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { AuthContext } from '../../../store/auth-context';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import ListCard from "../../../components/Authenticated/ListCard";
import UpcommingBills from "../../../components/Authenticated/UpcomingBills";
import GlobalStyle from "../../../components/ui/GlobalStyle";
import {useNavigation} from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    const [fetchedName, setFetchedName] = useState('');

    const authCtx = useContext(AuthContext);
    const token = authCtx.token;

    useEffect(() => {
        axios
            .get(
                'https://fir-project-3e85d-default-rtdb.europe-west1.firebasedatabase.app/name.json?auth=' +
                token
            )
            .then((response) => {
                setFetchedName(response.data);
            });
    }, [token]);

    return (
        <SafeAreaView style={GlobalStyle.all}>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
                <Text style={styles.title}>Good Morning, {fetchedName}!</Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="history" color={'#6D5FFD'} size={25} style={{marginLeft: 180, }}/>
                </TouchableOpacity>
            </View>

            <ListCard horizontal={true}/>

            <View style={{marginLeft:20, marginTop:30, flexDirection:'row'}}>
                <Text style={{ fontSize:18, fontFamily:'SemiBold', }}>Upcomming bill</Text>
                <TouchableOpacity>
                    <Text style={{fontSize:18, fontFamily:'SemiBold', marginLeft:200, color:'#6D5FFD'}}>See all</Text>
                </TouchableOpacity>
            </View>
            <UpcommingBills/>

            <StatusBar style="auto"/>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    title: {
        fontSize: 20,
        fontFamily: "Bold",
        marginLeft:20
    },
});
