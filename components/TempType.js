import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

const TempType = () => {
    const DropDown = ["Farenheit", "Celsius"]
    return (
        <View style={styles.item}>
            <View style={styles.itemTop}>
                <Text style={styles.text}>Type</Text>
            </View>



            <SelectDropdown
                data={DropDown}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 30,
        borderRadius: 10
    },
    itemTop: {},
    text: {
        paddingBottom: 10,
        color: 'black',
        opacity: .3,
        fontSize: 20,
    },

});

export default TempType;