import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './pages/landing/LandingPage';
import Login from './pages/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import userReducer from './pages/UserSLice';
const Stack = createNativeStackNavigator();
const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('user');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log('errror', e);
    }
};
const NavigationPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState()
    const dispatch = useDispatch();
    let userData = useRef();
    useEffect(() => {
        const getUser = async () => {
            userData.current = await getData();
            if (userData.current?.isLoggedIn) {
                dispatch(userReducer.actions.setusername(userData?.current?.username));

            }
            setIsLoggedIn(true)
            console.log("user", userData.current.isLoggedIn)
        }
        getUser();
    }, []);
    return <NavigationContainer>
        <Stack.Navigator
            initialRouteName={(async () => {
                return await getData().isLoggedIn;
            }) ? "LandingPage" : "Login"}>
            {!isLoggedIn && <Stack.Screen name="Login" component={Login} options={{ header: () => null }} />}
            <Stack.Screen name="LandingPage" component={LandingPage} options={{ header: () => null }} />
            {/* {isLoggedIn ? (<Stack.Screen name="LandingPage" component={LandingPage} options={{ header: () => null }} />) : (<Stack.Screen name="Login" component={Login} options={{ header: () => null }} />)} */}
        </Stack.Navigator>
    </NavigationContainer>;
};
export default NavigationPage;
