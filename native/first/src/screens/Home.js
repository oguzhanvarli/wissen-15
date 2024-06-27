import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '@rneui/themed'
import CharacterCard from '../components/CharacterCard'

const Home = () => {
  const [data, setData] = useState([])

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

  return (
    <ScrollView>
      {
        data.map((item, key) => (
          <CharacterCard item={item} />
        ))
      }
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})