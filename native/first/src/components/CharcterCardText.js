import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CharcterCardText = ({title, content}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  )
}

export default CharcterCardText

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    marginVertical: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#93A5CF"
  },
  content: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 15
  }
})