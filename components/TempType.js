import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';


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
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
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