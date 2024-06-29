import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ColourList = ({ color }) => {
  return (
    <ScrollView  contentContainerStyle={styles.container}>
      {
        [1, 2,0.9,].map( opacity => (
        <View
          key={opacity}
          style={[styles.color, { backgroundColor: color, opacity }]}
        />
      ))
      }
    </ScrollView>
  );
};

export default ColourList;

const styles = StyleSheet.create({
  color: {
    width: "100%",
    height: 120,
    borderRadius: 25,
    marginTop: 25,
    borderCurve: "continuous",
  },

  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: "100%",
  },
});
