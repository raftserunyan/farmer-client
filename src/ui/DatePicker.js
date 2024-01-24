import React, { useMemo } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { withTheme } from 'styled-components';
import ModernDatepicker from 'react-modern-datepicker';

import { CenteredFlex } from './styles';
import closeIcon from 'images/close.png';

export const DatePicker = withTheme(
  ({ date, error, theme, onChange, placeholder, ...rest }) => {
    const onSelectDate = (date) => {
      const dateFormatted = moment(date, 'DD/MM/YYYY');

      onChange?.(dateFormatted.toISOString());
    };

    const formattedDate = useMemo(
      () => (date ? moment(date).format('DD/MM/YYYY') : ''),
      [date]
    );
    console.log(formattedDate, 'formattedDate');
    return (
      <DatePickerContainer className="Date-Picker">
        <DatePickerComponent
          {...rest}
          date={formattedDate}
          allowEdit={false}
          format="DD/MM/YYYY"
          value={formattedDate}
          onChange={onSelectDate}
          className="DatePicker"
          placeholder={placeholder}
          primaryColor={theme.colors.green}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {date && (
          <ClearDateContainer onClick={() => onSelectDate(null)}>
            <img alt="clear" src={closeIcon} />
          </ClearDateContainer>
        )}
        {date && <Placeholder>{placeholder}</Placeholder>}
      </DatePickerContainer>
    );
  }
);

const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
  margin-left: 10px;
  font-weight: 500;
`;

const Placeholder = styled.div`
  position: absolute;
  background: #fff;
  font-size: 13px;
  top: -10px;
  left: 10px;
  color: #b8bcca;
  font-weight: 500;
`;

const ClearDateContainer = styled(CenteredFlex)`
  width: 35px;
  height: 35px;
  border-radius: 15%;
  transition: background 0.3s ease;
  position: absolute;
  right: 5px;
  top: 4.9px;
  cursor: pointer;

  img {
    width: 13px;
    height: 13px;
  }

  &:hover {
    background: #f6f6f8;
  }
`;

const DatePickerComponent = styled(ModernDatepicker)`
  border-radius: 4px;
  outline: none;
  border: 2px solid #d9d9d9;
  border-radius: 5px;
  position: relative;
  outline: none;
  padding: 0px 10px;
  font-family: sans-serif;
  transition: border 0.3s ease;

  &.DatePicker {
    height: 44px;
  }

  &.DatePicker + div {
    span {
      transition: background 0.3s ease;

      &:not(:empty) {
        &:hover {
          color: #fff;
          background: ${({ theme }) => theme.colors.lightGreen};
        }
      }
    }
  }

  &.DatePicker {
    font-size: 14px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.lightGray};
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.lightGreen};
  }
  &.DatePicker {
    padding: 14px 10px;
  }
  &.DatePicker + div {
    z-index: 100;
  }
`;

const DatePickerContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 4px;
`;
