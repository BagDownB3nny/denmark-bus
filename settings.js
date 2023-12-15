import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import RNPickerSelect from 'react-native-picker-select';

const SettingsPage = ({ 
    from,
    setFrom, 
    fromCode,
    setFromCode, 
    to,
    setTo, 
    toCode,
    setToCode, 
    setShowMain,
    color,
    setColor,
}) => {

    const colors = [
        {label: 'Blue', value: 'rgb(161,216,239)'},
        {label: 'Yellow', value: 'rgb(251,221,149)'},
        {label: 'Cyan', value: 'rgb(166,237,233)'},
        {label: 'Orange', value: 'rgb(241,177,139)'},
        {label: 'Purple', value: 'rgb(162,172,238)'}
       ];
    const [input1, setInput1] = useState(from);
    const [input2, setInput2] = useState(fromCode);
    const [input3, setInput3] = useState(to);
    const [input4, setInput4] = useState(toCode);

    const handleSave = () => {
        setFrom(input1);
        setFromCode(input2);
        setTo(input3);
        setToCode(input4);
        setShowMain(true);
    };

    return (
        <View style={styles.container}>
            <Text>From name</Text>
            <TextInput
                value={input1}
                onChangeText={setInput1}
                style={styles.input}
            />
            <Text>From code</Text>
            <TextInput
                value={input2}
                onChangeText={setInput2}
                style={styles.input}
            />
            <Text>To name</Text>
            <TextInput
                value={input3}
                onChangeText={setInput3}
                style={styles.input}
            />
            <Text>To Code</Text>
            <TextInput
                value={input4}
                onChangeText={setInput4}
                style={styles.input}
            />
            <Text>Choose color</Text>
            <Text style={{color:color, backgroundColor: "rgb(20,20,20)", fontSize:30}}>Current color</Text>
            <View style={{display:"flex" }}>
                <RNPickerSelect
                    onValueChange={setColor}
                    items={colors}
                    value={color}
                    style={{ fontSize: 50, backgroundColor: "rgb(20,20,20)" }} 
                />
            </View>
            <Button title="Save" onPress={handleSave} />
        </View>
    );
};

export default SettingsPage;


// Define your styles
const styles = StyleSheet.create({
    container: {  
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        height: 40,
        marginBottom: 20,
    },
  });