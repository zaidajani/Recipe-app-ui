import React from "react";
import { Button } from 'react-native-paper';
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const CategorieRawButton = styled(Button)`
  border-radius: 30px;
  width: 130px;
`;

const ButtonText = styled.Text`
  color: #242331;
  font-size: 12px;
`;

export const CategorieButton = ({ title }) => {
  return (
    <TouchableOpacity>
      <CategorieRawButton color="#A1B5D8" mode="contained" onPress={() => console.log('Pressed')}>
        <ButtonText>
          {title}
        </ButtonText>
      </CategorieRawButton>
    </TouchableOpacity>
  )
}