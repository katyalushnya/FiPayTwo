import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, FlatList, Image} from "react-native";
import {cards} from "../../datas/cards";

export default function ListCard({horizontal}){

    const renderItem=({item})=>{
        return(
            <View style={styles.cardContainer}>
                <Image source={require('../../assets/Card.png')} style={{marginLeft:20, marginTop:50, width:300, height:190}}/>
                <Text style={{ position:'absolute', fontFamily:'Regular', fontSize:16, color:'white', top:80, left:40}}>Balance</Text>
                <Text style={{ position:'absolute', fontFamily:'SemiBold', fontSize:25, color:'white', top:100, left:40}}>$ {item.balance}</Text>
                <Text style={{ position:'absolute', fontFamily:'Regular', fontSize:14, color:'white', top:180, left:40}}>Account number</Text>
                <Text style={{ position:'absolute', fontFamily:'SemiBold', fontSize:14, color:'white', top:200, left:40}}>{'**** **** ****'+ item.card_number.substring(14, 19)}</Text>
            </View>
        )
    }

    return(
        <View>
            {horizontal &&(
            <FlatList data={cards} horizontal renderItem={renderItem}/>)}
            {!horizontal &&(
                <FlatList data={cards} renderItem={renderItem}/>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title:{
        fontSize:23,
        color:'#394452',
        marginTop:20,
        marginLeft:20,
        fontFamily:'SourceSansProSemiBold',
    },
    cardContainer:{
        marginTop:-20
    },
});

