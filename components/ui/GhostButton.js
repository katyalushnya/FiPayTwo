import {Pressable, StyleSheet, Text, View} from 'react-native';

import {Colors} from '../../constants/styles';

function GhostButton({children, onPress, color}) {
    return (
        <Pressable
            style={{
                borderColor: color, borderWidth: 1, borderRadius: 5, paddingVertical: 10,
                paddingHorizontal: 12,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
            }}
            onPress={onPress}
        >
            <View>
                <Text style={{
                    color: color, textAlign: 'center',
                    fontSize: 18,
                    fontFamily: 'SemiBold',
                }}>{children}</Text>
            </View>
        </Pressable>
    );
}

export default GhostButton;
