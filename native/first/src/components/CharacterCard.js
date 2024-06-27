import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed'
import CharcterCardText from './CharcterCardText'
import LinearGradient from 'react-native-linear-gradient'

const CharacterCard = ({ item }) => {
  return (

    <Card containerStyle={{padding:0}}>
      <LinearGradient
        colors={['#93A5CF', '#E4EfE9']}
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
          <CharcterCardText title={"Status"} content={item.status} />
          <CharcterCardText title={"Species"} content={item.species} />
          <CharcterCardText title={"Gender"} content={item.gender} />
        </View>
      </LinearGradient>
    </Card >
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