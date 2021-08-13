import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ConvertButton from './components/ConvertButton';



export default function App() {
  return (
    <View style={styles.container}>

      {/* Temperature Converter */}
      <View style={styles.converterWrapper}>
        <Text style={styles.sectionTitle}>Fahrenheit to Celcius </Text>

        <View style={styles.items}>
          {/*converter components*/}
          <View>
            {/*Button*/}
            <ConvertButton />
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
    padding: 20,
  },
  degrees: {

  },
  row: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 5,

  },
  col: {

  },
});
