import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed'
import CharcterCardText from './CharcterCardText'
import LinearGradient from 'react-native-linear-gradient'

const CharacterCard = ({ item, onPress }) => {

  return (

    <TouchableOpacity onPress={() => onPress(item.id)}>
      <Card containerStyle={{ padding: 0 }} >
        <LinearGradient
          colors={['#2EABD1', '#E4EfE9']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Card.Title style={styles.title}>{item.name}</Card.Title>
          <Card.Divider />
          <View style={{ position: "relative", alignItems: "center" }}>
            <Image
              style={{ width: "100%", height: 250 }}
              resizeMode="contain"
              source={{ uri: item.image }}
            />
            <CharcterCardText title={"Status"} content={item.status} color={"#93A5CF"} />
            <CharcterCardText title={"Species"} content={item.species} color={"#93A5CF"}/>
            <CharcterCardText title={"Gender"} content={item.gender} color={"#93A5CF"}/>
          </View>
        </LinearGradient>
      </Card >
    </TouchableOpacity>
  )
}

export default CharacterCard

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 25,
    marginBottom: -8
  }
})