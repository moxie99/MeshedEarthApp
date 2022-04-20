import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
const CarItem = () => {

  return (
    <View style={styles.productContainer}>

        <ImageBackground 
        source={require('../../assets/meImages/aloevera.jpg')}
        style={styles.image}/>
        <View style={styles.titles}>
            <Text style={styles.title}>Aloe Vera Liquid</Text>
            <Text style={styles.subtitle}>Starting at $13.99 USD</Text>
        </View>

      </View>
  )
}

export default CarItem;
