import { StyleSheet, Text, View } from 'react-native';

import * as React from "react";

function InputText({ children }) {
    return (
        <View>
            <Text style={styles.textinput}>{children}<Text style={{color:'#DA1414'}}>*</Text></Text>
        </View>
    );
}

export default InputText;

const styles = StyleSheet.create({
    textinput:{
        fontSize:16,
        color:'gray',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        fontFamily:'SemiBold',
    },
});
