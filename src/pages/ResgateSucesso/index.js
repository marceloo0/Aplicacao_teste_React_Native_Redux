import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Header,
  Title,
  TopBox,
  TopText,
  Content,
  Button,
  TextBtn,
} from './styles';

const Investimentos = () => {
  const navigation = useNavigation();

  const handleSelectInvestimento = () => {
    navigation.navigate('Investimentos');
  };
  return (
    <Container>
      <Content>
        <Header>
          <Title>RESGATE EFETUADO!</Title>
        </Header>
        <TopText>
          O valor solicitado estará em sua conta em até 5 dias úteis!
        </TopText>
        <Button onPress={handleSelectInvestimento}>
          <TextBtn>NOVO RESGATE</TextBtn>
        </Button>
      </Content>
    </Container>
  );
};

export default Investimentos;
