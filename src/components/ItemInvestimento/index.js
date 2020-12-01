import React from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ItemContainer,
  ItemNome,
  ItemDescription,
  ItemValor,
} from './styles';

const ItemInvestimento = ({data}) => {
  const navigation = useNavigation();

  const handleSelectInvestimento = () => {
    navigation.navigate('Resgate', {
      itemNome: data.nome,
      itemSaldo: data.saldoTotalDisponivel,
      itemAcoes: data.acoes,
    });
  };

  const handleClick = () => {
    Alert.alert(
      'Erro ao acessa este investimento',
      'O investimento não está acessivel devido a carência.',
    );
  };

  return (
    <>
      {data.indicadorCarencia === 'N' ? (
        <Container onPress={() => handleSelectInvestimento()}>
          <ItemContainer>
            <ItemNome>{data.nome}</ItemNome>
            <ItemDescription>{data.objetivo}</ItemDescription>
          </ItemContainer>
          <ItemValor>{data.saldoTotalDisponivel}</ItemValor>
        </Container>
      ) : (
        <Container disabled={true} onPress={() => handleClick()}>
          <ItemContainer>
            <ItemNome>{data.nome}</ItemNome>
            <ItemDescription>{data.objetivo}</ItemDescription>
          </ItemContainer>
          <ItemValor>{data.saldoTotalDisponivel}</ItemValor>
        </Container>
      )}
    </>
  );
};

export default ItemInvestimento;
