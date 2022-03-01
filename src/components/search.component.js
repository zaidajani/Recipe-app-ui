import React from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

const SearchComp = styled(Searchbar)`
  border-radius: 10px;
`;

export const Search = () => {
  return (
    <SearchComp 
      placeholder="Search"
    />
  );
};