import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../constants/styles';

function FilledButton({ children, onPress }) {
    return (
        <Pressable
            style={styles.button}
            onPress={onPress}
        >
            <View>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    );
}

export default FilledButton;

const styles = StyleSheet.create({
    button: {
        marginTop:25,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: Colors.primary800,
        height:50,
        alignItems:"center",
        justifyContent: "center",
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontFamily:'Bold',
    },
});
