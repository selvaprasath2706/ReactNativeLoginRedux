/* eslint-disable prettier/prettier */
import { Button, Text, TextInput } from 'react-native';
import TestRenderer from 'react-test-renderer';
import StartingPage from '../src/pages/StartingPage';
describe('Starting Page', () => {
    it('Check is there is text', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const testRenderer = TestRenderer.create(<StartingPage />);
        const button = testRenderer.root.findByType(Button);
        const text = testRenderer.root.findAllByType(Text)[1];
        expect(
            text.props.children
        ).toBe('');
        TestRenderer.act(() => {
            button.props.onPress();
        });
        expect(
            text.props.children
        ).toBe('selv');
    });

    it('Check is there is textInput', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const testRenderer = TestRenderer.create(<StartingPage />);
        const textInput = testRenderer.root.findByType(TextInput);
        // console.log("textinput start", textInput)
        TestRenderer.act(() => {
            textInput.props.onChangeText('selva');
        });
        expect(textInput.props.value).toBe('selva');
        // console.log(textInput.props.value);
        // console.log(textInput);
        // expect(
        //     textInput.props.children
        // ).toBe('');
        // button.props.onPress();
        // expect(
        //     textInput.props.children
        // ).toBe('selv');
    });
});


// import React from 'react';
// import StartingPage from '../src/pages/StartingPage';
// import { render, fireEvent } from '@testing-library/react-native';
// import { getByTestId, getByText } from '@testing-library/react';
// // import { getByPlaceholderText, getByTestId } from '@testing-library/react';
// describe('Starting Page test', () => {
//     it('expect text', async () => {
//         const { getAllByText } = render(<StartingPage />);
//         console.log('getAll by text', getAllByText);
//         // const Hi = await screen.findByText('HI', { exact: false });
//         expect(getAllByText('Login').length).toBe(1);
//     });
//     it('expect username', () => {
//         const { getAllByText, getByPlaceholderText } = render(<StartingPage />);
//         console.log(get)
//         const TextInput = getByPlaceholderText('username');
//         const button = getByText('Login');
//         console.log('textin', TextInput, button);
//         fireEvent.changeText(TextInput, 'This is selva');
//         fireEvent.press(button);
//         const createdText = getByText('This is selva');
//         expect(createdText).not.toBeNull();
//     });
// });
