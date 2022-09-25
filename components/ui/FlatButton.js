import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../constants/styles';

function FlatButton({ children, onPress }) {
    return (
        <Pressable
            style={{marginLeft:10,}}
            onPress={onPress}
        >
            <View>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    );
}

export default FlatButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        fontFamily:'SemiBold',
        fontSize: 18,
        textAlign: 'center',
        color: Colors.primary800,
    },
});
