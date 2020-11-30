import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #ececec;
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
export const Line = styled.View`
  height: 5px;
  background: #ffff00;
  width: 100%;
`;
export const TopBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
`;
export const TopText = styled.Text`
  color: #9c9c9c;
  font-weight: bold;
`;
