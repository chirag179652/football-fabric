import React from 'react';
import SearchBarComp from '../../components/SearchBar/SearchBar';
import { View } from 'react-native';
import { KitInfoCard } from '../components/kitInfoCard';
import { styled } from 'styled-components/native';

const MainContent = styled(View)`
  width: 100%;
  background-color: rgb(200, 200, 200);
  height: 100%;
`;

const Header = styled(View)`
  width: 100%;
  padding: 10px;
  background-color: rgb(200, 200, 200);
`;

export const KitsScreen = () => {
  return (
    <>
      <Header>
        <SearchBarComp />
      </Header>
      <MainContent>
        <KitInfoCard />
      </MainContent>
    </>
  );
};
