import React from "react";
import { Text, View, FlatList } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Search } from "../../../components/search.component";
import { CardComp } from "../../../components/foodCard.component";

const favData = require('./mock/favourite.json');

const HomeScreenWrapper = styled.View`
  padding: 16px;
`;

const Spacer = styled.View`
  padding: 10px;
`;

const FoodList = styled(FlatList)`
  margin-bottom: 40px;
`;

export const SavedScreen = () => {
  return (
    <SafeAreaView>
      <HomeScreenWrapper>
        <Search />
        <Spacer />
      </HomeScreenWrapper>
        <FoodList 
            data={favData}
            renderItem={({ item }) => {
              return (
                <>
                  <CardComp uri={item.uri} title={item.name} />
                  <Spacer />
                </>
              )
            }}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{
              padding: 16,
            }}
          />
    </SafeAreaView>
  )
}