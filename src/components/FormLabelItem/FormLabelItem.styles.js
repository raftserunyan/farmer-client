import styled from 'styled-components';

export const FormLabelItemContainer = styled.div`
  padding: 20px 15px;
  border-radius: 13px;
  margin-top: 4px;
  position: relative;
  border: 2px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100% - 34px);
`;

export const Label = styled.div`
  position: absolute;
  // z-index: 1;
  white-space: pre;
  background: #fff;
  font-size: 13px;
  top: -12px;
  left: 10px;
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: bold;
`;

export const DisabledWrapper = styled.div`
  position: absolute;
  width: calc(100% + 1px);
  border-radius: 13px;
  height: calc(100% + 1px);
  top: -1px;
  background: rgb(231 226 226 / 40%);
  transition: opacity 0.3s ease;
  left: -1px;
  opacity: 0;
  z-index: 0;

  &.disabled {
    opacity: 1;
    z-index: 2;
  }
`;
