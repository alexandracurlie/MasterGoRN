import React from 'react';
import {View, StyleSheet, Animated, useWindowDimensions} from 'react-native';
import {Colors} from '../../styles/styles';
import {OnboardItemType} from '../../utilities';

type Props = {
  data: OnboardItemType[],
  scrollX: Animated.Value,
}

export const Paginator = ({data, scrollX}: Props) => {
  const { width } = useWindowDimensions()

  return (
    <View style={styles.container}>
      {data.map((_: any , i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        })
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        })

         return <Animated.View style={[styles.dot, {width: dotWidth, opacity }]} key={i.toString()}/>;
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 10,
    width: 100,
    marginBottom: 30
  },

  dot: {
    height: 10,
    width: 15,
    borderRadius: 5,
    backgroundColor: Colors.light_gray,
  },
})
