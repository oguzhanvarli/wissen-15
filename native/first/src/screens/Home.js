import { ScrollView, StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '@rneui/themed'
import CharacterCard from '../components/CharacterCard'

const Home = ({ navigation }) => {
  const [data, setData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      let response = await axios.get("https://rickandmortyapi.com/api/character")
      setData(response.data.results)
    } catch (error) {
      console.log("Error Get Characters", error)
    }
  }

  const goToDetails = (id) => {
    navigation.navigate("Detail", {itemId: id})
  }

  useEffect(() => {
    if(pageNumber !== 1) getPageCharacters()
  }, [pageNumber])

  const getPageCharacters = async () => {
    try {
      let response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
      setData([...data, ...response.data.results])
    } catch (error) {
      console.log("Error Get Characters", error)
    }
  }

  // console.log(pageNumber)

  return (
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({ item }) => <CharacterCard item={item} onPress={goToDetails} />}
        ListHeaderComponent={<Text style={styles.headerText}>Rick And Morty App</Text>}
        //INFINITY SCROLL
        onEndReached={() => setPageNumber(pageNumber + 1)}
        onEndReachedThreshold={2}
        ListFooterComponent={
          <View style={styles.loadingIndicator}>
            <ActivityIndicator size={"large"} color={"#2EABD1"} />
          </View>
        }
      />
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