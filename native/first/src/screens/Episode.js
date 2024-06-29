import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '@rneui/themed'
import LinearGradient from 'react-native-linear-gradient'
import CharcterCardText from '../components/CharcterCardText'

const Episode = ({ route, navigation }) => {
  const { itemId } = route.params

  const [data, setData] = useState({})
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    try {
      let response = await axios.get("https://rickandmortyapi.com/api/episode/" + itemId)
      setData(response.data)

      let characterNumbers = response.data.characters.map((charcter) => {
        return charcter.split("character/")[1]
      })
      // console.log(...characterNumbers)
      let characterResponse = await axios.get("https://rickandmortyapi.com/api/character/" + [...characterNumbers])
      setCharacters(characterResponse.data)
    } catch (error) {
      console.log("Get Episode Error", error)
    }
  }
  return (
    <View>
      <Card containerStyle={{ padding: 0 }}>
        <LinearGradient
          colors={['#2EABD1', '#E4EfE9']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Card.Title style={styles.title}>{data.name}</Card.Title>
          <Card.Divider />
          <View style={{ alignItems: "center" }}>
            <CharcterCardText title={"Date"} content={data.air_date} color={"#fff"} />
            <CharcterCardText title={"Episode"} content={data.episode} color={"#fff"} />
          </View>

          <Text style={styles.headerText}>Characters</Text>
          <FlatList
            keyExtractor={(index) => index}
            data={characters}
            horizontal
            style={{marginBottom: 20}}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Detail", { itemId: item.id })}>
                <View style={styles.episodeContainer}>
                  <Image
                    style={{ width: "100%", height: "100%", borderRadius: 200 }}
                    resizeMode="contain"
                    source={{ uri: item.image }}
                  />
                </View>
                <Text style={styles.episodeText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </LinearGradient>
      </Card>
    </View>
  )
}

export default Episode

const styles = StyleSheet.create({
  headerText: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 6,
    color: '#fff',
    textShadowColor: '#2EABD1',
    textShadowOffset: { width: -3, height: 1 },
    textShadowRadius: 1,
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'center',
    marginVertical: 10,
  },
  gradient: {
    borderRadius: 8,
  },
  episodeContainer: {
    height: 80,
    width: 80,
    backgroundColor: "white",
    borderRadius: 55,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  episodeText: {
    fontSize: 10,
    color: "#2EABD1",
    fontWeight: "600",
    textAlign: "center"
  },
})