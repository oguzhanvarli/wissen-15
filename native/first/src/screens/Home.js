import { ScrollView, StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '@rneui/themed'
import CharacterCard from '../components/CharacterCard'

const Home = ({ navigation }) => {
  const [data, setData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    //getData()
  }, [])

  //INFINITY SCROOL GELDİĞİ İÇİN GEREK KALMADI
  const getData = async () => {
    try {
      let response = await axios.get("https://rickandmortyapi.com/api/character")
      setData(response.data.results)
    } catch (error) {
      console.log("Error Get Characters", error)
    }
  }

  const goToDetails = () => {
    navigation.navigate("Detail")
  }

  useEffect(() => {
      getPageCharacters()
  }, [pageNumber])

  const getPageCharacters = async () => {
    console.log("Workend")
    try {
      let response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
      setData([...data, ...response.data.results])
    } catch (error) {
      console.log("Error Get Characters", error)
    }
  }

  // console.log(pageNumber)

  return (
    <View>
      {/* {
        data.map((item, key) => (
          <CharacterCard item={item} onPress={goToDetails} />
        ))
      } */}
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({ item }) => <CharacterCard item={item} onPress={goToDetails} />}
        ListHeaderComponent={<Text style={styles.headerText}>Rick And Morty App</Text>}
        //INFINITY SCROLL
        onEndReached={() => setPageNumber(pageNumber + 1)}
        onEndReachedThreshold={5}
        ListFooterComponent={
          <View style={styles.loadingIndicator}>
            <ActivityIndicator size={"large"} color={"#2EABD1"} />
          </View>
        }
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 6,
    color: "#2EABD1"
  },
  loadingIndicator:{
    marginVertical: 25
  }
})