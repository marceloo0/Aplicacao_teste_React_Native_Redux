import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  padding: 10px 20px;
  background: #ffffff;
  margin-top: 10px;
`;
export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;
export const ItemNome = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #414040;
`;
export const ItemDescription = styled.Text`
  font-weight: normal;
  color: #9c9c9c;
  font-weight: bold;
  font-size: 18px;
`;
export const ItemValor = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #414040;
`;
export const ItemNomeValor = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;
export const ResgateInput = styled.TextInput`
  color: #414040;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  height: 45px;
`;
export const ItemError = styled.Text`
  font-size: 12px;
  margin-top: 5px;
  color: red;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background: #ececec;
`;

export const ItemContainerInput = styled.View``;
