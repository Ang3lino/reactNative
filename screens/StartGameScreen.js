import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Card from '../components/Card';


const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title} > Adivina un numero bobo </Text>
            <Card style={styles.inputContainer}>
                <Text > Escoga un numero </Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title='Reiniciar' onPress={() => { }}/>
                    <Button title='Confirmar' onPress={() => { }}/>
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