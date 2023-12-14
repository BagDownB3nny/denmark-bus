import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
  },
  text: {
    position: 'absolute',
    color: 'black',
    fontFamily: 'Fuse',
    fontWeight: 'bold',
    fontSize: 42,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
});
