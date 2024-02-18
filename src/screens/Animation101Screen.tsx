import { Animated, Button, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

export const Animation101Screen = () => {

  const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();

  return (
    <View style={ styles.container }>
        <Animated.View style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity,
          // top, // top no maneja useNativeDriver
          transform: [{
            translateY: position,
          }]
        }} />
        <Button
          title="FadeIn"
          onPress={ () => {
            fadeIn();
            startMovingPosition(-100) // arriba a abajo
            // startMovingPosition(100) // abajo a arriba
          }}
        />
        <Button
          title="FadeOut"
          onPress={ fadeOut }
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  }
});