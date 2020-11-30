import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  width: 100%;
`;
export const Header = styled.View`
  height: 60px;
  width: 100%;
  background: #1605aa;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;
export const LineTop = styled.View`
  height: 5px;
  background: #ffff00;
  width: 100%;
`;
export const Line = styled.View`
  height: 1px;
  width: 100%;
  background: #ececec;
`;
export const TopBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 20px;
  width: 100%;
`;
export const TopText = styled.Text`
  color: #9c9c9c;
  font-weight: bold;
`;

export const Content = styled.SafeAreaView`
  background: #ececec;
  width: 100%;
`;

export const DadosContainer = styled.View`
  padding: 5px 20px;
  background: #fff;
  margin-top: 10px;
  width: 100%;
`;
export const DadosItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
export const DadosItemNome = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #414040;
`;
export const DadosItemDescription = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #9c9c9c;
`;
export const ActionButtom = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
`;
export const Button = styled(RectButton)`
  background: #ffff00;
  height: 60px;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;
export const TextBtn = styled.Text`
  color: #135ee9;
  font-size: 20px;
  font-weight: bold;
`;
export const TextLabel = styled.Text`
  color: ${(props) => (props.color ? '#135ee9' : 'red')};
  font-size: 12px;
  font-weight: bold;

  ${(props) =>
    props.visible &&
    css`
      visibility: false;
    `}
`;
export const TextInput = styled.TextInput`
  color: #414040;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  height: 45px;
`;
export const Edit = styled.View`
  padding: 10px 0;
  width: 100%;
`;

export const DadosFooterContainer = styled.View`
  height: 60px;
  width: 100%;
  background: #ffffff;
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const DadosFooterNome = styled.Text`
  color: #414040;
  font-size: 20px;
  font-weight: bold;
`;
