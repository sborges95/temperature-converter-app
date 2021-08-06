import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Degrees from './components/Degrees'
import TempType from './components/TempType';


export default function App() {
  return (
    <View style={styles.container}>

      {/* Temperature Converter */}
      <View style={styles.converterWrapper}>
        <Text style={styles.sectionTitle}>Temperature Converter</Text>

        <View style={styles.items}>
          {/*converter components*/}
            <View style={styles.row}>
              <View style={styles.col}>
                <Degrees />
              </View>
              <View style={styles.col}>
                <TempType />
              </View>
            </View>
        </View>
</View>
      </View>
      );
}

      const styles = StyleSheet.create({
        container: {
        flex: 1,
      backgroundColor: '#e0e6ea',
  },
      converterWrapper: {
        paddingTop: 80,
      paddingHorizontal: 20,
  },
      sectionTitle: {
        fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
  },
      items: {
       
      },
      degrees: {

      },
      row: {
        flexDirection: 'row',
        paddingVertical: 30,
        paddingHorizontal: 20,
      },
      col: {
        paddingRight: 30,
      },
});
