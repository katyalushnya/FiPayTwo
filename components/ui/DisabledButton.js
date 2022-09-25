import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { Colors } from '../../constants/styles';

function DisabledButton({ children, onPress, disabled}) {
    return (
    <Pressable disabled={disabled} style={disabled ? (styles.buttonSignInDis) : (styles.buttonSignIn)} onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    );
}

export default DisabledButton;

const styles = StyleSheet.create({
    buttonSignIn:{
        backgroundColor:Colors.primary800,
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginRight:20,
        marginTop:20,
        marginLeft:20,
    },
    buttonSignInDis:{
        backgroundColor:Colors.primary500,
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginRight:20,
        marginTop:20,
        marginLeft:20,
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontFamily:'SemiBold',
    },
});
