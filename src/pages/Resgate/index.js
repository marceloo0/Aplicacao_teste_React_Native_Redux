import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, Alert, Platform, ScrollView} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import Header from '../../components/Header';
import ButtonResgate from '../../components/ButtonResgate';
import ItemResgate from '../../components/ItemResgate';

import {formatPrice} from '../../util/format';

import {
  Container,
  Line,
  TopBox,
  TopText,
  Content,
  DadosContainer,
  DadosItemContainer,
  DadosItemNome,
  DadosItemDescription,
  ActionButtom,
  Button,
  TextBtn,
  DadosFooterContainer,
  DadosFooterNome,
} from './styles';

const Resgate = ({}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const investData = route.params.item;
  const dispatch = useDispatch();

  const [data, setData] = useState({
    nome: route.params.itemNome,
    saldo: route.params.itemSaldo,
  });
  const [acoes, setAcoes] = useState(route.params.itemAcoes);
  const {stocks} = useSelector((state) => state.rescue);
  const [total, setTotal] = useState(0);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonComfirma = (count, saldo) => {
    if (count <= 0) {
      Alert.alert(
        'Erro no valor de resgate',
        'Seu valor de resgate não deve ser igual a zero!',
      );
    } else {
      count > saldo
        ? Alert.alert(
            'Erro no valor de resgate',
            'Seu valor de resgate deve ser menor que o saldo total disponível!',
          )
        : navigation.navigate('ResgateSucesso');
    }
  };

  useEffect(() => {
    let totalStock = 0;
    let valid = true;
    stocks.map((stock) => {
      totalStock += stock.value;
      if (!stock.valid) {
        valid = false;
      }
    });

    setButtonDisabled(!valid || totalStock === 0);
    setTotal(totalStock);
  }, [stocks]);

  useEffect(() => {
    dispatch({
      type: 'SET_STOCKS',
      stocks: acoes.map((stock) => {
        return {
          ...stock,
          value: 0,
          valid: true,
        };
      }),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView>
        <Container>
          <Header />

          <Content>
            <TopBox>
              <TopText>DADOS DO INVESTIMENTO</TopText>
            </TopBox>
            <DadosContainer>
              <DadosItemContainer>
                <DadosItemNome>Nome</DadosItemNome>
                <DadosItemDescription>{data.nome}</DadosItemDescription>
              </DadosItemContainer>
              <Line />
              <DadosItemContainer>
                <DadosItemNome>Saldo total disponível</DadosItemNome>
                <DadosItemDescription>
                  {formatPrice(data.saldo)}
                </DadosItemDescription>
              </DadosItemContainer>
            </DadosContainer>
            <TopBox>
              <TopText>RESGATE DO SEU JEITO</TopText>
            </TopBox>
            {acoes.map((item) => (
              <ItemResgate data={item} valorTotal={data.saldo} />
            ))}
            <DadosFooterContainer>
              <DadosFooterNome>Valor total a resgatar</DadosFooterNome>
              <DadosFooterNome>{formatPrice(total)}</DadosFooterNome>
            </DadosFooterContainer>
          </Content>

          <ActionButtom>
            <Button onPress={() => handleButtonComfirma(total, data.saldo)}>
              <TextBtn>CONFIRMAR RESGATE</TextBtn>
            </Button>
          </ActionButtom>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Resgate;
