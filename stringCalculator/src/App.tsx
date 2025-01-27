import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {TestIDs} from './utils/testIDS';
import styles from './styles/AppStyle';

const App = () => {
  const [sum, setSumValue] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onChange = (text: string) => {
    setSumValue(text);
  };

  const getTotal = (arr: string[]) => {
    return arr.reduce((result: number, current: string): number => {
      const delimiterRegEx = /[ *_#;:/]/g; // add future delimiter in case we want to add it more
      current = current.toLowerCase().replace(delimiterRegEx, '').trim();
      current = current.toLowerCase().replace(/\n/g, ',');
      current = current.toLowerCase().replace(/,/g, ',');

      let currentVal = current.includes(',')
        ? getTotal(current?.split(','))
        : parseInt(current, 10);
      return result + currentVal;
    }, 0);
  };

  const onPress = () => {
    if (sum === undefined) {
      setMessage('You need to enter a string');
    } else if (sum === '') {
      setMessage(`The sum is 0`);
    } else {
      let stringArray = sum.split(',');
      let numArray = stringArray.map(x => parseInt(x, 10));
      let negativeNums = numArray.filter(x => x < 0);
      if (negativeNums.length > 0) {
        let negativeString = negativeNums.join(',');
        return setMessage(`negative numbers not allowed ${negativeString}`);
      }
      const result = getTotal(stringArray);
      setMessage(`The sum is ${result}`);
    }
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.wrapperStyle}>
        <Text>Enter your numbers with separation of ","</Text>
        <TextInput
          value={sum}
          placeholder="Enter your values"
          style={styles.inputStyle}
          testID={TestIDs.input}
          onChangeText={onChange}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={onPress}
          testID={TestIDs.submitButton}>
          <Text style={styles.buttonTitleStyle}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text testID={TestIDs.text} style={styles.messageTextStyle}>
        {message}
      </Text>
    </View>
  );
};

export default App;
