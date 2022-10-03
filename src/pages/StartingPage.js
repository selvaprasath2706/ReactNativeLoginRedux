/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
const StartingPage = () => {
    const [userInp, setUserInp] = useState('');
    return <View>
        <TextInput style={styles.textInp} onChangeText={setUserInp} value={userInp} />
        <Button title="Login" data-testid="login" onPress={() => setUserInp('selv')} />
        <Text>{userInp}</Text>
    </View>;
};
const styles = StyleSheet.create({
    textInp: {
        borderWidth: 1,
        borderColor: '#000',
    },
});
export default StartingPage;
//{/* <TextInput placeholder="username" style={styles.textInp} value={userInp} onChangeText={setUserInp} /> */ }
