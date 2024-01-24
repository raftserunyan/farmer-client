import React, { useMemo } from 'react'
import ReactSelect from 'react-select'
import styled, { withTheme } from 'styled-components';

import { isObject } from 'helpers'

const colourStyles = (theme) => ({
  control: (styles, { isFocused, menuIsOpen }) => ({
    ...styles,
    backgroundColor: 'white',
    outline: 'none',
    boxShadow: 'none',
    borderColor: menuIsOpen ? '#087370': '#d4d4d4',
    borderWidth: '2px',
    minHeight: '44px',
    ':hover': {
      ...styles['hover'],
      borderColor: '#087370',
    }
  }),
  menuList: (styles) => ({
    ...styles,
    '::-webkit-scrollbar': {
      width: '7px'
    },
    '::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 5px #eeeeee',
      borderRadius: "10px"
    },
    '::-webkit-scrollbar-thumb': {
      background: theme.colors.green,
      borderRadius: '10px'
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: theme.colors.lightGreen
    }
  }),
  option: (styles, { isDisabled, isSelected }) => {
    return {
      ...styles,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      backgroundColor: isSelected ? 'rgba(8,115,112,0.50)' : '#fff',
      ':hover': {
        ...styles[':hover'],
        backgroundColor: isSelected ? 'rgba(8,115,112,0.50)' : 'rgba(8,115,112,0.12)',
      },
      ':active': {
        ...styles[':active']
      },
    };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: '14px',
    color: theme.colors.lightGray
  }),
  singleValue: (styles) => ({ ...styles, fontFamily: 'Arial', fontSize: '14px' }),
})

export const Select = withTheme(({
  theme,
  value,
  error,
  options,
  accessorKey,
  placeholder,
  ...rest
}) => {
  const optionsFormatted = useMemo(() => {
    return options.map(option => ({
      value: isObject(option) ? option.id : option,
      label: isObject(option) ? option[accessorKey] : option
    }))
  }, [options, accessorKey])

  const valueFormatted = useMemo(() => {
    return value
      ? {
          value: isObject(value) ? value.id : value,
          label: isObject(value) ? value[accessorKey] : value
        }
      : null
  }, [value, accessorKey])

  return (
    <SelectContainer className='SelectContainer'>
      {
        value &&
          <Placeholder>
            { placeholder }
          </Placeholder>
      }
      <ReactSelect
        {...rest}
        value={valueFormatted}
        placeholder={placeholder}
        options={optionsFormatted}
        isClearable={true}
        className='React-Select'
        styles={colourStyles(theme)}
      />
      {
        error &&
          <ErrorMessage>{ error }</ErrorMessage>
      }
    </SelectContainer>
  )
})

Select.defaultProps = {
  options: [],
  accessorKey: 'name'
}

const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
  margin-left: 10px;
  font-weight: 500;
`

const SelectContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  gap: 4px;

  .React-Select {
    div[id*=listbox]:last-child {
      z-index: 2;
    }
  }
`

const Placeholder = styled.div`
  position: absolute;
  z-index: 1;
  background: #fff;
  font-size: 13px;
  top: -10px;
  left: 10px;
  color: #B8BCCA;
  font-weight: 500;
`