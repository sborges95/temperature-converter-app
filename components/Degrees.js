import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const Degrees = () => {

    return (
        <View style={styles.item}>
            <View style={styles.itemTop}>
                 <Text style={styles.text}>Degrees</Text> 
            </View>
          <TextInput 
            placeholder="Enter Degrees"
            keyboardType={'numeric'}
            type="number" 
            pattern="[0-9]*" 
            inputmode="numeric"  
        />
        </View>
    )
    }

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 30,
        borderRadius: 10},
    itemTop: {},
    text: {
        paddingBottom: 10,
        color: 'black', 
        opacity: .3, 
        fontSize: 20},
});

export default Degrees;
