import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import Colors from '../constants/Colors';
import Input from '../components/Input';
import Card from '../components/Card';


const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title} > Adivina un numero, lios@ </Text>
            <Card style={styles.inputContainer}>
                <Text > Escoga un numero </Text>
                <Input style={styles.input} 
                        blurOnSubmit autoCapitalize='none' autoCorrect={false}  
                        keyboardType='number-pad' maxLength={2} />
                <View style={styles.buttonContainer}>
                    <Button title='Reiniciar' onPress={() => { }} 
                            color={Colors.accent} />
                    <Button title='Confirmar' onPress={() => { }}
                            color={Colors.primary} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'  // horizontal
    }, 
    input: {
        width: 20,
        textAlign: 'center' // el texto se pondra en el centro a medida que se escriba
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%', // ? 
        alignItems: 'center',
    }, 
    buttonContainer: {
        flexDirection: 'row',
        width: '100%', 
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 20, 
        marginVertical: 10
    }
})


export default StartGameScreen;