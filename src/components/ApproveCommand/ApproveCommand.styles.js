import styled from 'styled-components';
import { CenteredFlex } from 'ui/styles';

export const ApproveCommandContainer = styled(CenteredFlex)`
  gap: 10px;
`;

export const Button = styled(CenteredFlex)`
  min-width: 50px;
  min-height: 50px;
  border-radius: 25px;
  transition: background 0.3s ease;

  img {
    width: 27px;
    height: 27px;
  }

  &:hover {
    background: #dadada;
  }
`;
