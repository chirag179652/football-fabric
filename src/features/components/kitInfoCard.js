import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { styled } from 'styled-components/native';

const ClubName = styled(Text)`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  margin-top: 10px;
`;

const KitCardView = styled(View)`
  margin: 10px;
`;

export const KitInfoCard = ({ kit = {} }) => {
  const {
    club = 'Manchester United',
    price = '799',
    pictures = [
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe0ce38456ab4ad2871bafc400cca89d_9366/Manchester_United_23-24_Home_Jersey_Kids_Red_IP1736_01_laydown.jpg',
    ],
    quality = 'master',
    type = 'home',
    isAvailable = true,
  } = kit;
  return (
    <KitCardView>
      <Card>
        <Card.Cover source={{ uri: pictures[0] }} />
        <Card.Content>
          <ClubName>{club}</ClubName>
        </Card.Content>
      </Card>
    </KitCardView>
  );
};
