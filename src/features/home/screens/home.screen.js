import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Search } from "../../../components/search.component";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { TopDishesCard } from "../../../components/top-dishes.component";
import { CategorieButton } from "../../../components/categorie-button.component";
import { CardComp } from "../../../components/foodCard.component";

const topDishData = require('./mock/top-dish.json');
const dishesData = require('./mock/dishes.json');

const HomeScreenWrapper = styled.View`
  padding: 16px;
`;

const Spacer = styled.View`
  padding: 10px;
`;

const SpacerTop = styled.View`
  padding: 6px;
`;

const TopDishes = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

const TopListWrapper = styled.View`
  height: 130px;
  width: 100%;
`;

const FoodList = styled(FlatList)`
  height: 70%;
  margin-bottom: -200px;
`;

const categories = [{name: "veg"}, {name: "non-veg"}, {name: "vegetables"}, {name: "fruits"}, {name: "special"}]

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <HomeScreenWrapper>
        <Search />
        <Spacer />
        <TopDishes>Top Dishes</TopDishes>
        <Spacer />
        <TopListWrapper>
          <FlatList 
            horizontal showsHorizontalScrollIndicator={false}
            data={topDishData}
            renderItem={({ item }) => {
              return (
                <>
                  <TopDishesCard uri={item.uri} name={item.name} />
                  <SpacerTop />
                </>
              )
            }}
          />
        </TopListWrapper>
        <SpacerTop />
        <FlatList 
          horizontal showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => {
            return (
              <>
                <CategorieButton title={item.name} />
                <SpacerTop />
              </>
            )
          }}
        />
        </HomeScreenWrapper>
        <View>
          <FoodList 
            data={dishesData}
            renderItem={({ item }) => {
              return (
                <>
                  <CardComp uri={item.uri} title={item.name} />
                  <SpacerTop />
                </>
              )
            }}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{
              padding: 16,
            }}
          />
        </View>
    </SafeAreaView>
  );
};
