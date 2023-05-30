import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'



const StartGameScreen = ({ onPickNumber }) => {

    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const choseNumber = parseInt(enteredNumber);

        if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
            // show alert...
            Alert.alert('Invaild Number!', 'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return;
        }
        onPickNumber(choseNumber);
    }

    return (
        <View style={styles.roorContainer}>
            <Title>Gues My Number</Title>
            <Card style={styles.inputContainer}>
                <InstructionText>Enter a number</InstructionText>
                <TextInput
                    style={styles.numnerInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>

            </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    roorContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },

    numnerInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})