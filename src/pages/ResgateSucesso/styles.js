import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #333;
`;
export const Content = styled.View`
  background: #fff;
  font-weight: bold;
  width: 100%;
  height: 280px;
`;
export const Header = styled.View`
  height: 80px;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: #135ee9;
  font-size: 26px;
  font-weight: bold;
  margin: 20px 0;
`;

export const TopText = styled.Text`
  color: #9c9c9c;
  font-weight: normal;
  font-size: 18px;
  padding: 0 20px;
`;

export const Button = styled(RectButton)`
  position: absolute;
  bottom: 0px;
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
