import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
productContainer:{
    width: '100%',
    height: '100%',

  },
  titles: {
    marginTop: '50%',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
  },
  subtitle: {
    fontStyle: 'italic',
    fontSize: 16,
    color: '#fff555'
  },
  subtitleCTA:{
    textDecorationLine: 'underline',
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  },
  buttonContainer:{
    position: 'absolute',
    bottom: 50,
    width: '100%'
  }
})

export default styles;