import React, {useRef, useState} from 'react';
import {Animated, FlatList, StyleSheet, View} from 'react-native';
import {OnboardItem} from './OnboardItem';
import {slides, OnboardItemType} from '../../utilities';
import {Button} from '../Buttons/Button';
import {Paginator} from '../Paginator/Paginator';

type Props = {
  item: OnboardItemType,
}

export const Onboard = () => {

  const scrollX = useRef(new Animated.Value(0)).current
  const [currentIndex, setCurrentIndex] = useState(0)
  const slidesRef = useRef(null)

  const renderItem = ({item}: Props) => (
    <OnboardItem title={item.title}
                 img={item.img}
                 description={item.description} />
  )

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index)
  }).current

  const scrollTo = () => {
    if (currentIndex < slides.length- 1) {
      // @ts-ignore
      slidesRef.current.scrollToIndex({index: currentIndex + 1})
    } else {
      console.log("Last item")
    }
  }

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

      <Button title={"Next"} onPress={scrollTo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  }
})
