import { Button } from 'react-native-elements';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import React, { useState } from 'react';


export default function ConvertButton() {
    const [degreeInput, setDegrees] = useState('');
    const txtHandler = (inputText) => {
        setDegrees(inputText)
    };

    const btnConvert = () => {
        var results = (degreeInput - 32) * 5 / 9;
        alert(results);
    };

    return (
        <View>
            <View style={styles.item}>
                <View>
                    <Text style={styles.text}>Degrees in Fahrenheit</Text>
                </View>
                <TextInput
                    placeholder="Please enter Degrees in Fahrenheit"
                    keyboardType={'numeric'}
                    type="number"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    value={degreeInput}
                    onChangeText={txtHandler}
                />
            </View>
            <Button title="Convert" onPress={btnConvert} />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 30,
        borderRadius: 10
    },
   
    text: {
        paddingBottom: 10,
        color: 'black',
        opacity: .3,
        fontSize: 20
    },
 
});
