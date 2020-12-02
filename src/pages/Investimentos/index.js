import React, {useEffect, useState} from 'react';

import Header from '../../components/Header';
import ItemInvestimento from '../../components/ItemInvestimento';

import {Container, TopBox, TopText} from './styles';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />
      <TopBox>
        <TopText>INVESTIMENTOS</TopText>
        <TopText>R$</TopText>
      </TopBox>
      {data.map((item) => (
        <ItemInvestimento key={item.nome} data={item} />
      ))}
    </Container>
  );
};

export default Investimentos;
