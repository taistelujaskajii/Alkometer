import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';


export default function App() {
    const [weight, setWeight] = useState(0);
    const [bottles, setBottles] = useState(1);
    const [gender, setG] = useState('male');
    const [time, setTime] = useState(1);
    const [promilles, setPromilles] = useState(0);

    const genders = [
      {label: 'Male', value: 'male'},
      {label: 'Female', value: 'female'}
    ];

    const items = [
      {label: '1', value: 1},
      {label: '2', value: 2},
      {label: '3', value: 3},
      {label: '4', value: 4},
      {label: '5', value: 5},
      {label: '6', value: 6},
      {label: '7', value: 7},
      {label: '8', value: 8},
      {label: '9', value: 9},
      {label: '10', value: 10},
      {label: '11', value: 11},
      {label: '12', value: 12},
      {label: '13', value: 13},
      {label: '14', value: 14},
      {label: '15', value: 15},
      {label: '16', value: 16},
      {label: '17', value: 17},
      {label: '18', value: 18},
      {label: '19', value: 19},
      {label: '20', value: 20},
      {label: '21', value: 21},
      {label: '22', value: 22},
      {label: '23', value: 23},
      {label: '24', value: 24}
    ];

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput style={styles.input}
        onChangeText={text => setWeight(text)} 
        placeholder="in kilograms" 
        keyboardType='numeric'></TextInput>
      </View>
      <View style={[styles.field, {zIndex: 6000}]}>
        <Text> Bottles</Text>
        <Picker 
        items={items}
        selectedValue={bottles}
        onValueChange={(itemValue) => setBottles(itemValue)}>
          {items.map((bottles,index) => (
            <Picker.Item key={index} label={bottles.label} value={bottles.value}/>
          ))
          }
        </Picker>
      </View>
      <View style={[styles.field, {zIndex: 5000}]}>
        <Text> Time</Text>
        <Picker 
        items={items}
        selectedValue={time}
        onValueChange={(itemValue) => setTime(itemValue)}>
          {items.map((time,index) => (
            <Picker.Item key={index} label={time.label} value={time.value}/>
          ))
          }
        </Picker>
      </View>
      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm
          style={styles.radio}
          buttonSize = {10}
          radio_props={genders}
          initial={0}
          onPress={(value) => {setG(value)}}
        />
      </View>
      <View>
        <Text style={styles.field}>Promilles: {promilles.toFixed(2)}</Text>
      </View>
      <Button onPress={calculate} title='Calculate'></Button>
    </View>
  );

  function calculate() {
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8* 4.5;
    let Burning = weight / 10;
    let Grams = grams - Burning * time;
    if (gender === 'male') {
      result = Grams / (weight * 0.7);
    } else {
      result = Grams / (weight * 0.6);
    }

    if (result < 0 || result == Infinity) {
      result = 0;
    }
    setPromilles(result);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  field: {
    margin: 10,
  },
  input: {
    marginLeft: 10,
  },
  radio: {
    marginTop: 10,
    marginBottom: 10,
  }
});