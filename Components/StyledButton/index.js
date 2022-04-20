import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';

const StyleButton = (props) => {

    // const type = props.type
    // const title = props.title
    // const onPress = props.onPress

    const {type, title, onPress} = props
    const backgroundColor = type === 'primary'? '#171A20CC': '#FFFFA6';
    const color = type==='primary'? '#FFFFFF': '#171A20';
    
  return (
    <View style={styles.container}>
      <Pressable
      style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress = {onPress}
      >
          <Text style={[styles.text, {color: color}]}>{title}</Text>
      </Pressable>
    </View>
  )
}

export default StyleButton;