import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

const SettingsPage = ({ 
    from,
    setFrom, 
    fromCode,
    setFromCode, 
    to,
    setTo, 
    toCode,
    setToCode, 
    setShowMain
}) => {
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