import React, {useEffect, useState} from 'react';

import ItemInvestimento from '../../components/ItemInvestimento';

import {Container, Header, Title, Line, TopBox, TopText} from './styles';

const Investimentos = () => {
  const [data, setData] = useState([]);

  const loadInvestimentos = () => {
    fetch('http://www.mocky.io/v2/5e76797e2f0000f057986099')
      .then((response) => response.json())
      .then((json) => setData(json.response.data.listaInvestimentos))
      .then(console.log(data));
  };

  useEffect(() => {
    loadInvestimentos();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resgate</Title>
      </Header>
      <Line />
      <TopBox>
        <TopText>INVESTIMENTOS</TopText>
        <TopText>R$</TopText>
      </TopBox>
      {data.map((item) => (
        <ItemInvestimento data={item} />
      ))}
    </Container>
  );
};

export default Investimentos;
