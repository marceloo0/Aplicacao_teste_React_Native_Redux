import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, TextBtn} from './styles';

const ButtonResgate = ({children, tela}) => {
  const navigation = useNavigation();

  const handleButton = () => {
    navigation.navigate(`${tela}`);
  };

  return (
    <Container onPres={() => handleButton()}>
      <TextBtn>{children}</TextBtn>
    </Container>
  );
};

export default ButtonResgate;
