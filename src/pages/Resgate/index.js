import React, {useState, useContext, useCallback} from 'react';
import {KeyboardAvoidingView, Alert, Platform, ScrollView} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {CountContext} from '../../context/Saldo';

import {
  Container,
  Title,
  Header,
  Line,
  LineTop,
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
  TextInput,
  TextLabel,
  Edit,
  DadosFooterContainer,
  DadosFooterNome,
} from './styles';
import {formatPrice} from '../../util/format';

const Resgate = () => {
  const {count, setCount} = useContext(CountContext);
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState({
    nome: route.params.itemNome,
    saldo: route.params.itemSaldo,
  });
  const [acoes, setAcoes] = useState(route.params.itemAcoes);
  const texto = [];

  function calculaSaldo(valoTotal, percentual) {
    const valor_Total = valoTotal;
    const porcent = percentual;
    return (valor_Total * porcent) / 100;
  }

  const handleEdit = useCallback((e, parcial) => {
    if (e > parcial) {
      Alert.alert(
        'Erro no saldo de resgate',
        `O valor não pode ser maior que ${formatPrice(parcial)}`,
      );
    } else {
      console.log('não pode');
    }
    console.log(e);
    texto.push({
      valor: parseInt(e),
    });
    const total = texto.reduce((acc, x) => acc + x.valor, 0);
    console.log(total);
    console.log(texto);
    setCount(total);
  }, []);

  const handleSelectInvestimento = () => {
    count === 0
      ? Alert.alert(
          'Erro no valor de resgate',
          'Seu valor de resgate deve ser maior que zero!',
        )
      : navigation.navigate('ResgateSucesso');
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView>
        <Container>
          <Header>
            <Title>Resgate</Title>
          </Header>
          <LineTop />

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
              <Content>
                <DadosContainer>
                  <DadosItemContainer>
                    <DadosItemNome>Ação</DadosItemNome>
                    <DadosItemDescription>{item.nome}</DadosItemDescription>
                  </DadosItemContainer>
                  <Line />
                  <DadosItemContainer>
                    <DadosItemNome>Saldo acomulado</DadosItemNome>
                    <DadosItemDescription>
                      {formatPrice(calculaSaldo(data.saldo, item.percentual))}
                    </DadosItemDescription>
                  </DadosItemContainer>
                  <Line />
                  <Edit>
                    <TextLabel color={'#135ee9'}>Valor a resgatar</TextLabel>
                    <TextInput
                      value={texto}
                      defaultValue="R$ 0,00"
                      keyboardType="numeric"
                      onEndEditing={(e) =>
                        handleEdit(
                          e.nativeEvent.text,
                          calculaSaldo(data.saldo, item.percentual),
                        )
                      }
                    />
                    <Line />
                    {/* <TextLabel>
                      Valor não pode ser maior que{' '}
                      {formatPrice(calculaSaldo(data.saldo, item.percentual))}{' '}
                    </TextLabel> */}
                  </Edit>
                </DadosContainer>
                <Line />
              </Content>
            ))}
            <DadosFooterContainer>
              <DadosFooterNome>Valor total a resgatar</DadosFooterNome>
              {!count ? (
                <DadosFooterNome>{formatPrice(0)} </DadosFooterNome>
              ) : (
                <DadosFooterNome>{formatPrice(count)} </DadosFooterNome>
              )}
            </DadosFooterContainer>
          </Content>

          <ActionButtom>
            <Button onPress={() => handleSelectInvestimento(count, data.saldo)}>
              <TextBtn>CONFIRMAR RESGATE</TextBtn>
            </Button>
          </ActionButtom>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Resgate;