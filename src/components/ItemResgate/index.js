import React, {useState, useEffect} from 'react';
import {formatPrice} from '../../util/format';

import {useDispatch} from 'react-redux';

import {
  Container,
  ItemContainer,
  ItemNome,
  ItemDescription,
  ItemValor,
  ItemNomeValor,
  ResgateInput,
  ItemError,
  Line,
  ItemContainerInput,
} from './styles';

const ItemResgate = ({data, valorTotal}) => {
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    `O Valor resgatado tem que ser menor ou igual a ${formatPrice(
      Math.round(data.percentual * valorTotal) / 100,
    )}`,
  );

  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  function handleChangeRescueValue(valorTotal) {
    setValue(valorTotal);
  }

  useEffect(() => {
    let valid = false;

    if (
      parseFloat(value.toString().replace('.', '').replace(',', '.')) >
      Math.round(data.percentual * valorTotal) / 100
    ) {
      setValue('0,00');
      setTimeout(function () {
        setErrorStatus(true);
        valid = false;
      }, 500);
    } else {
      setErrorStatus(false);
      valid = true;
    }

    dispatch({
      type: 'UPDATE_STOCKS',
      stock: {
        ...data,
        value: parseFloat(value.toString().replace('.', '').replace(',', '.')),
        valid,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      <Container>
        <ItemContainer>
          <ItemNome>Ação</ItemNome>
          <ItemDescription>{data.nome}</ItemDescription>
        </ItemContainer>
        <Line />
        <ItemContainer>
          <ItemNome>Saldo acumulado</ItemNome>
          <ItemValor>
            {formatPrice(Math.round(data.percentual * valorTotal) / 100)}
          </ItemValor>
        </ItemContainer>
        <Line />
        <ItemContainerInput>
          <ItemNomeValor>Valor a resgatar</ItemNomeValor>
          <ResgateInput
            autoCorrect={false}
            autoCapitalize="none"
            type="money"
            onChangeText={handleChangeRescueValue}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: '',
              suffixUnit: '',
            }}
            value={value}
            placeholder="R$ 0,00"
            keyboardType="numeric"
          />
          <Line />
        </ItemContainerInput>
        {errorStatus && <ItemError>{errorMessage}</ItemError>}
      </Container>
    </>
  );
};

export default ItemResgate;
