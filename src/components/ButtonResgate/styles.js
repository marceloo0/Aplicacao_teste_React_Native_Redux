import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {lighten} from 'polished';

export const Container = styled(RectButton)`
  background: ${(props) =>
    props.disabled ? lighten(0.1, '#ffff00') : '#ffff00'};
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
