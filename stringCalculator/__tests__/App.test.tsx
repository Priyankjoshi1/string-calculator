/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import {render, fireEvent} from '@testing-library/react-native';
import {TestIDs} from '../src/utils/testIDS';

const component = render(<App />);

describe('it to test string calculator', () => {
  it('renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('it to have button and TextInput and result text', () => {
    const {getByTestId} = render(<App />);

    const button = getByTestId(TestIDs.submitButton);
    const input = getByTestId(TestIDs.input);
    const text = getByTestId(TestIDs.text);

    expect(button).toBeDefined();
    expect(input).toBeDefined();
    expect(text).toBeDefined();
  });

  it('give error when undefine string was there', () => {
    const {getByTestId} = render(<App />);
    const button = getByTestId(TestIDs.submitButton);
    const input = getByTestId(TestIDs.input);
    const text = getByTestId(TestIDs.text);

    fireEvent.changeText(input);
    fireEvent.press(button);
    expect(text.props.children).toBe('You need to enter a string');
  });

  it('give 0 when no string was there', () => {
    const {getByTestId} = render(<App />);
    const button = getByTestId(TestIDs.submitButton);
    const input = getByTestId(TestIDs.input);
    const text = getByTestId(TestIDs.text);

    fireEvent.changeText(input, '');
    fireEvent.press(button);
    expect(text.props.children).toBe('The sum is 0');
  });

  it('give 120 when 70,50 was there', () => {
    const {getByTestId} = render(<App />);
    const button = getByTestId(TestIDs.submitButton);
    const input = getByTestId(TestIDs.input);
    const text = getByTestId(TestIDs.text);

    fireEvent.changeText(input, '70,50');
    fireEvent.press(button);
    expect(text.props.children).toBe('The sum is 120');
  });

  it('give 1 when 1 was there', () => {
    const {getByTestId} = render(<App />);
    const button = getByTestId(TestIDs.submitButton);
    const input = getByTestId(TestIDs.input);
    const text = getByTestId(TestIDs.text);

    fireEvent.changeText(input, '1');
    fireEvent.press(button);
    expect(text.props.children).toBe('The sum is 1');
  });

  it('give 6 when 1\n2,3 was there', () => {
    const {getByTestId} = render(<App />);
    const button = getByTestId(TestIDs.submitButton);
    const input = getByTestId(TestIDs.input);
    const text = getByTestId(TestIDs.text);

    fireEvent.changeText(input, '1\n2,3');
    fireEvent.press(button);
    expect(text.props.children).toBe('The sum is 6');
  });

  it('give error when negative number was there to add', () => {
    const {getByTestId} = render(<App />);
    const button = getByTestId(TestIDs.submitButton);
    const input = getByTestId(TestIDs.input);
    const text = getByTestId(TestIDs.text);

    fireEvent.changeText(input, '-1, -2');
    fireEvent.press(button);
    expect(text.props.children).toBe('negative numbers not allowed -1,-2');

    fireEvent.changeText(input, '-1, 2');
    fireEvent.press(button);
    expect(text.props.children).toBe('negative numbers not allowed -1');
  });

  it('give 10 when given string was there', () => {
    const {getByTestId} = render(<App />);
    const button = getByTestId(TestIDs.submitButton);
    const input = getByTestId(TestIDs.input);
    const text = getByTestId(TestIDs.text);

    fireEvent.changeText(input, '\n;:\n 6,4');
    fireEvent.press(button);
    expect(text.props.children).toBe('The sum is 10');
  });

  it('give 10 when only one string was there', () => {
    const {getByTestId} = render(<App />);
    const button = getByTestId(TestIDs.submitButton);
    const input = getByTestId(TestIDs.input);
    const text = getByTestId(TestIDs.text);

    fireEvent.changeText(input, '10');
    fireEvent.press(button);
    expect(text.props.children).toBe('The sum is 10');
  });
});
