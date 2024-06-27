import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const CounterSample = () => {

  const [counter, setCounter] = useState(0)


  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={styles.textStyle}>{counter}</Text>
      <Button  onPress={increment} title='Arttır' color={"turquoise"}></Button>
      <Button onPress={decrement} title='Azalt' color={"indianred"}></Button>

    </View>
  )
}
export default CounterSample

const styles = StyleSheet.create({
  textStyle : {
    fontSize: 40,
    color: "red",
    textAlign: "center"
  }
})

