import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColourList from '../components/ColourList';

const Home = () => {
  return (
    <View>
      <ColourList  color={'#0891b2'} />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({})