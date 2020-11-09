import React from 'react'
import { TextInput, StyleSheet } from 'react-native'


const Input = props => {
    // {...props} nos permite agregar tantos atributos como sean posibles
    return <TextInput {...props} style={{...styles.input, ...props.style}}>
        
    </TextInput>
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 8,
        height: 32
    }
})


export default Input