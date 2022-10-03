import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './UserSLice';
import FastImage from 'react-native-fast-image';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { userpng, password, backgroundImage, placeholderColor } from '../consts/LoginConstant';
const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const passwordRef = useRef();
    const [userDetails, setuserDetails] = useState({
        username: '',
        password: '',
    });
    const [errorText, setErrorText] = useState({
        username: '',
        password: '',
    });
    return <View >
        <Image source={{ uri: backgroundImage }} style={styles.backgroundImageStyle} />
        <View style={styles.signInView}>
            <Text style={styles.textHeading}>Sign In</Text>
            <View style={styles.InputView}>
                <FastImage style={styles.iconStyle} source={userpng} />
                <TextInput style={styles.textInputStyle} placeholderTextColor={placeholderColor} placeholder="Enter the Username" value={userDetails.username} onChangeText={(e) => {
                    setuserDetails({ ...userDetails, username: e });
                    if (userDetails.username.length === 0) {
                        setErrorText({ ...errorText, username: 'Username cannot be null' });
                        return;
                    }
                    if (userDetails.username.length < 5) {
                        setErrorText({ ...errorText, username: 'Username cannot be less than 5 characters' });
                        return;
                    }
                    setErrorText({ ...errorText, username: '' });
                }
                } returnKeyType="next" />
            </View>
            {errorText.username && <Text style={styles.errorText}>{errorText?.username}</Text>}
            <View style={styles.InputView}>
                <Image style={styles.iconStyle} source={password} />
                <TextInput ref={passwordRef} style={styles.textInputStyle} placeholderTextColor={placeholderColor} placeholder="Enter the Password" value={userDetails.password} onChangeText={(e) => {
                    setuserDetails({ ...userDetails, password: e });
                    if (userDetails.password.length === 0) {
                        setErrorText({ ...errorText, password: 'Password cannot be null' });
                        return;
                    }
                    if (userDetails.password.length < 5) {
                        setErrorText({ ...errorText, password: 'Password cannot be less than 5 characters' });
                        return;
                    }
                    setErrorText({ ...errorText, password: '' });
                }} />
            </View>
            {errorText.password && <Text style={styles.errorText}>{errorText?.password}</Text>}
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                if (!errorText.username && !errorText.password && userDetails.username && userDetails.password) {
                    setuserDetails({ ...userDetails, username: '', password: '' });
                    dispatch(userReducer.actions.setusername(userDetails.username));
                    const storeData = async (value) => {
                        try {
                            const jsonValue = JSON.stringify(value);
                            await AsyncStorage.setItem('user', jsonValue);
                            console.log('success');
                        } catch (e) {
                            console.log('error', e);
                        }
                    };
                    storeData({ username: userDetails.username, isLoggedIn: true });
                    navigation.navigate('LandingPage');
                }
            }}><Text style={styles.loginButton}>Login</Text></TouchableOpacity>
        </View>
    </View >;
};
const styles = StyleSheet.create({
    backgroundImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    signInView: {
        borderRadius: 20,
        padding: 20,
        position: 'absolute',
        width: '100%',
        bottom: '20%',
    },
    textHeading: {
        color: '#fff',
        fontSize: 25,
    },
    InputView: {
        borderWidth: 1,
        borderColor: '#00000000',
        borderBottomColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    iconStyle: {
        width: 30,
        height: 30,
    },
    textInputStyle: {
        color: '#fff',
    },
    errorText: {
        color: 'red',
    },
    buttonStyle: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
    },
    loginButton: {
        alignSelf: 'center',
        color: '#000',
    },
});
export default Login;
