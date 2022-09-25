import {Image, Pressable, StyleSheet, Text, View} from 'react-native';


function HeaderBlackArrow({ children, onPress }) {

    return (
        <Pressable onPress={onPress}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:10 }}/>
            <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    );
}

export default HeaderBlackArrow;

const styles = StyleSheet.create({
    buttonText: {
        marginLeft:20,
        marginTop:10,
        fontSize:20,
        fontFamily:'SemiBold'
    },
});
