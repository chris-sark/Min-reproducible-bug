import { View, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <SafeAreaView >
      <Link href={'page1'}> go to page1</Link>
    </SafeAreaView>
  );
};

export default index;
