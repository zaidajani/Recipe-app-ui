import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

const Spacer = styled.View`
  padding: 5px;
`;

const Title = styled.Text`
  width: 100px;
  text-align: center;
`;

export const TopDishesCard = ({ uri, name }) => {
  return (
    <View>
      <Image source={{ uri: uri }} style={{
        height: 100,
        width: 100,
        borderRadius: 20,
      }} />
      <Spacer />
      <Title>{name}</Title>
    </View>
  );
}