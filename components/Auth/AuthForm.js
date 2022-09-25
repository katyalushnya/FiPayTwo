import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../ui/Button';
import Input from './Input';
import FilledButton from "../ui/FilledButton";
import InputText from "../ui/InputText";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
    const [enteredFullName, setEnteredFullName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const {
        email: emailIsInvalid,
        password: passwordIsInvalid,
    } = credentialsInvalid;

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'email':
                setEnteredEmail(enteredValue);
                break;
            case 'password':
                setEnteredPassword(enteredValue);
                break;
            case 'fullname':
                setEnteredFullName(enteredValue);
                break;
        }
    }

    function submitHandler() {
        onSubmit({
            name: enteredFullName,
            email: enteredEmail,
            password: enteredPassword,
        });
    }

    return (
        <View style={styles.form}>
            <View>
                {!isLogin && (
                    <InputText>Full Name</InputText>
                )}
                {!isLogin && (
                    <Input
                        onUpdateValue={updateInputValueHandler.bind(this, 'fullname')}
                        value={enteredFullName}
                    />
                )}
                <InputText>Email or Phone Number</InputText>
                <Input
                    onUpdateValue={updateInputValueHandler.bind(this, 'email')}
                    value={enteredEmail}
                    keyboardType="email-address"
                    isInvalid={emailIsInvalid}
                />
                <InputText>Password</InputText>
                <Input
                    label="Password"
                    onUpdateValue={updateInputValueHandler.bind(this, 'password')}
                    secure
                    value={enteredPassword}
                    isInvalid={passwordIsInvalid}
                />
                    <FilledButton onPress={submitHandler}>
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </FilledButton>
            </View>
        </View>
    );
}

export default AuthForm;

const styles = StyleSheet.create({
});
