import styled, {css} from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background: #ffffff;
  margin-top: 5px;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
    `}
`;

export const ItemContainer = styled.View`
  left: 0;
`;
export const ItemNome = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #414040;
`;
export const ItemDescription = styled.Text`
  font-weight: normal;
  color: #9c9c9c;
`;
export const ItemValor = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #414040;
`;
