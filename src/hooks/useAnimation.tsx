import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
    // Value para manejar un solo valor. ValueXY para manejar dos valores
    const opacity = useRef(new Animated.Value(0.4)).current;
    const position = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(
          opacity,
          {
            toValue: 1, // que se mueva la opacidad al valor de 1
            duration: 300, // en cuanto tiempo va llegar al valor de 1
            useNativeDriver: true // para que sea acelerado por hardware
          }
        ).start(() => console.log('animacion terminó')) // para que la animacion empieza se necesita el start. .stop() detiene la animacion sin importar el punto donde esta
        // lo que se pone en start() es un endcallback, es lo que se va a ejecutar cuando termine la animacion
    }


    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
            }
        ).start()
    }

    const startMovingPosition = (initPosition: number, duration: number = 300) => {

        position.setValue(initPosition);

        Animated.timing(
            position,
            {
              toValue: 0,
              duration,
              useNativeDriver: true,
            //   easing: Easing.bounce // para que rebote
            }
          ).start();
    }

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition
    }
}


