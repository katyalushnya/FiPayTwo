import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Colors } from '../../constants/styles';

function Input({
                   keyboardType,
                   secure,
                   onUpdateValue,
                   value,
                   isInvalid,
               }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={[styles.input, isInvalid && styles.inputInvalid]}
                autoCapitalize={false}
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    label: {
        color: 'white',
        marginBottom: 4,
    },
    labelInvalid: {
        color: Colors.error500,
    },
    input: {
        marginTop:5,
        borderColor:'#a5abb3',
        borderWidth:1,
        borderRadius:5,
        height:50,
        paddingLeft:15,
        fontFamily:'SemiBold',
    },
    inputInvalid: {
        backgroundColor: Colors.error100,
    },
});
