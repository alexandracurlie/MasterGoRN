import React, {useCallback, useRef, useState} from 'react';
import {Animated, FlatList, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {OnboardItem} from './OnboardItem';
import {Button} from '../Buttons/Button';
import {Paginator} from '../Paginator/Paginator';
import {slides, OnboardItemType} from '../../utilities';

type Props = {
  item: OnboardItemType,
  check: () => Promise<void> | void,
}

export const Onboard = ({check}: Pick<Props, "check">) => {
  const scrollX = useRef(new Animated.Value(0)).current
  const [currentIndex, setCurrentIndex] = useState(0)
  const slidesRef = useRef(null)

  const renderItem = ({item}: Pick<Props, "item">) => (
    <OnboardItem title={item.title}
                 img={item.img}
                 description={item.description} />
  )

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index)
  }).current

  const scrollTo = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      // @ts-ignore
      slidesRef.current.scrollToIndex({index: currentIndex + 1})
    } else {
      AsyncStorage.setItem('@viewed', 'true')
        .catch(error => console.log("Error at setItem", error))
        .then(() => check())
    }
  }, [currentIndex])

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList data={slides}
                  renderItem={renderItem}
                  bounces={false}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={((item: OnboardItemType) => item.id)}
                  onScroll={Animated.event(
                    [{nativeEvent:{contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false})}
                  scrollEventThrottle={32}
                  onViewableItemsChanged={onViewableItemsChanged}
                  viewabilityConfig={viewConfig}
                  ref={slidesRef} />
      </View>
      <Paginator data={slides} scrollX={scrollX}/>

      <Button title={currentIndex < slides.length - 1 ? "Next" : "Login"}
              color={"green"}
              size={"large"}
              onPress={scrollTo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    paddingVertical: 40,
  }
})
