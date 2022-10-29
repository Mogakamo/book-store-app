import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(()=> {
    fetch('https://fudap-books-api.herokuapp.com/books/')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [])

  console.log(data)

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}
