import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';

import styles from './styles';
import products from './products';
import ProductItem from '../ProductItem';

const ProductsList = (props) => {
  return (
    <View style={styles.container}>

        <FlatList
        data={products}
        renderItem={({item}) => <ProductItem product ={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        />


      {/* <FlatList 
      data={products}
      renderItem={({item}) => <ProductItem product={item} />}
      /> */}
    </View>
  );
}

export default ProductsList;
