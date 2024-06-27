import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexSample = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainerOne}>
        <Text>1</Text>
      </View>
      <View style={styles.innerContainerSecond}>
        <Text>2</Text>
      </View>
      <View style={styles.innerContainerThird}>
        <Text>3</Text>
      </View>
    </View>
    
  )
}

export default FlexSample

const styles = StyleSheet.create({
  mainContainer : {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "red"
  },
  innerContainerOne: {
    flex: 2,
    backgroundColor: "yellow"
  },
  innerContainerSecond: {
    flex: 2,
    backgroundColor: "brown"
  },
  innerContainerThird:{
    flex: 1,
    backgroundColor: "aqua"
  }
})