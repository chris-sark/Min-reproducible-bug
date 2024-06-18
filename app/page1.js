import { View, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";

const page1 = () => {
  return (
    <SafeAreaView style={{backgroundColor:"black", flex:1}}>
      <Link href={''} style={{color:'white'}}> go to index</Link>
    </SafeAreaView>
  );
};

export default page1;
