import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CharacterDetail = ({route}) => {
  const {itemId} = route.params 
  console.log(itemId)
  //https://rickandmortyapi.com/api/character/ + itemId
  return (
    <View>
      <Text>CharacterDetail</Text>
    </View>
  )
}

export default CharacterDetail

const styles = StyleSheet.create({})