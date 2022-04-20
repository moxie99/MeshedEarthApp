import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyleButton from '../StyledButton'
import styles from './styles';

const CarItem = (props) => {

  const {productName, tagLine, tagLineCTA, image} = props;
  return (
    <View style={styles.productContainer}>

        <ImageBackground 
        source={image}
        style={styles.image}/>
        <View style={styles.titles}>
            <Text style={styles.title}>{productName}</Text>
            <Text style={styles.subtitle}>
              {tagLine}
              <Text style={styles.subtitleCTA}>
                {tagLineCTA}
                </Text>
            </Text>
            
        </View>

        <View style={styles.buttonContainer}>

          <StyleButton 
        type="primary" 
        title="add to cart"
        onPress={() => {
          console.warn("Added to Cart")
      }}
        />
        <StyleButton 
        type="secondary" 
        title="buy now"
        onPress={() => {
          console.warn("Select Quantity")
        }}
        />

        <StyleButton 
        type="secondary" 
        title="Description"
        onPress={() => {
          console.warn("Please wait")
        }}
        />

        </View>

        
      </View>
  )
}

export default CarItem;
