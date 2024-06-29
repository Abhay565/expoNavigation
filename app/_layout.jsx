import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../components/TabBar";

const _layout = () => {
  return <Tabs  tabBar={props => <TabBar    {...props}  />} >
  <Tabs.Screen name="home" options={{title:'Home'}} />
  <Tabs.Screen name="create" options={{title:'Create'}} />
  <Tabs.Screen name="explore" options={{title:"Explore"}} />
  <Tabs.Screen name="profile" options={{title: "Profile"}} />
    </Tabs>;
};

export default _layout;

const styles = StyleSheet.create({});
