import React from 'react';
import { View, StyleSheet } from 'react-native';


const Card = props => {
    return <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',  // shadow... solo funciona en iOS 
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        borderRadius: 10,  
        elevation: 4,  // propiedad para dar sombra, solo valida para android, 
        backgroundColor: 'white',  // acompana a la elevacion, sin esta prop se ve horrible
        padding: 10
        // shadowColor: 'black',
    }
})


export default Card ;