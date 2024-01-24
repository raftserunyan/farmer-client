import styled from "styled-components"
import { CenteredFlex } from "ui/styles"

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: min-content;
  // width: 400px;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  transition: all 0.3s ease;
`

export const FilterContent = styled.div`
  padding: 20px;
  height: calc(100% - 40px);

  > div {
    width: 400px;
  }

  overflow-y: auto;
`

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  justify-content: space-between;
  cursor: pointer;
  padding: 20px;
`

export const HeaderTitle = styled.div`
  font-weight: 500;
`

export const Divider = styled.div`
  width: calc(100% - 40px);
  margin: 0px auto;
  height: 2px;
  background: #f6f6f8;
`

export const CloseFormContainer = styled(CenteredFlex)`
  width: 45px;
  height: 45px;
  border-radius: 20%;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #f6f6f8;
  }
`

export const CloseFormIcon = styled.img`
  width: 15px;
  heigth: 15px;
  object-fit: cover;
`