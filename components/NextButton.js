import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useEffect } from 'react'
import Svg, { G, Circle, Polygon, Rect } from 'react-native-svg'
import { AntDesign } from '@expo/vector-icons';
export default function NextButton({ percentage, ScrollTo }) {
  const size = 128
  const strokeWidth = 2
  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const progressRef = useRef(null)
  const progressAnimation = useRef(new Animated.Value(0)).current
  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true
    }).start()
  }

  useEffect(() => {
    animation(percentage)
  }, [percentage])

  useEffect(() => {
    progressAnimation.addListener(
      (value) => {
        const strokeDashoffset = circumference - (circumference * value.value) / 100;
        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset
          })
        }
      }, [percentage]
    )
    return () => progressAnimation.removeAllListeners()
  }, [])


  return (
    <View style={styles.container}>
      <Svg width={size} height={size} >
        <G rotation={-90} origin={center}>
          <Circle
            stroke="grey"
            strokeWidth={strokeWidth}
            cx={center}
            cy={center}
            r={radius}
          />
          <Circle
            ref={progressRef}
            stroke="#FB741D"
            strokeWidth={strokeWidth}
            cx={center}
            cy={center}
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 60) / 100}
            fill='#1E2A3F'
          />
        </G>
      </Svg>
      <TouchableOpacity onPress={ScrollTo} style={styles.button}>
        <AntDesign name="arrowright" size={32} color="white" />
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#FB741D',
    borderRadius: 100,
    padding: 20
  }
})