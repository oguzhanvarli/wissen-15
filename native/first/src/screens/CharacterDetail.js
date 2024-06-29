import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import { Card } from '@rneui/themed';
import CharcterCardText from '../components/CharcterCardText';

const CharacterDetail = ({ route }) => {
  const { itemId } = route.params;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacterData();
  }, []);

  const getCharacterData = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${itemId}`);
      setData(response.data);
    } catch (error) {
      console.log("Error Get Characters", error);
    } finally {
      setLoading(false);
    }
  };



  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffd100" />
      </View>
    );
  }

  return (
    <View >
      {data.id ?
        <View style={styles.generalView}>
          <Card containerStyle={{ padding: 0 }}>
            <LinearGradient
              colors={['#2EABD1', '#E4EfE9']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradient}
            >
              <Card.Title style={styles.title}>{data.name}</Card.Title>
              <Card.Divider />
              <View style={{ position: "relative", alignItems: "center" }}>
                <Image
                  style={{ width: "100%", height: 250 }}
                  resizeMode="contain"
                  source={{ uri: data.image }}
                />
                <CharcterCardText title={"Name"} content={data.name} color={"#93A5CF"} />
                <CharcterCardText title={"Status"} content={data.status} color={"#93A5CF"} />
                <CharcterCardText title={"Species"} content={data.species} color={"#93A5CF"} />
                <CharcterCardText title={"Type"} content={data.type} color={"#93A5CF"} />
                <CharcterCardText title={"Gender"} content={data.gender} color={"#93A5CF"} />
              </View>
              <Text style={styles.headerText}>Episodes</Text>
              <FlatList
                keyExtractor={(index) => index}
                data={data.episode}
                horizontal
                renderItem={({ item }) => (
                  <View style={styles.episodeContainer}>
                    <Text style={styles.episodeText}>{item.split("episode/")[1]}</Text>
                  </View>
                )}
              />
            </LinearGradient>
          </Card>
        </View>
        : null}


    </View>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  episodeContainer: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    borderRadius: 25,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  episodeText: {
    fontSize: 20,
    color: "#2EABD1",
    fontWeight: "600"
  },
  gradient: {
    borderRadius: 8,
  },
  generalView: {
    marginBottom: 20

  },

});
