/* eslint-disable prettier/prettier */
import TestRenderer from 'react-test-renderer';
import { TextInput, TouchableOpacity } from 'react-native';
import Login from '../src/pages/Login';

describe('Login Page test', () => {
    it('expect username,password to be empty', () => {
        const navigation = { navigate: jest.fn() };
        const testRenderer = TestRenderer.create(<Login navigation={navigation} />);
        const textInput = testRenderer.root.findAllByType(TextInput);
        const button = testRenderer.root.findByType(TouchableOpacity);
        const username = textInput[0];
        const password = textInput[1];
        TestRenderer.act(() => {
            username.props.onChangeText('selvaa');
        });
        TestRenderer.act(() => {
            password.props.onChangeText('prasath');
        });
        expect((username.props.value).length).toBeGreaterThan(5);
        expect((password.props.value).length).toBeGreaterThan(5);
        TestRenderer.act(() => {
            button.props.onPress();
        });
        expect(navigation.navigate).toHaveBeenCalledWith('Lp');
    });
});
