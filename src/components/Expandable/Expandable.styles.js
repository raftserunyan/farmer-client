import styled from 'styled-components'
import { CenteredFlex } from 'ui/styles'

export const ExpandableContainer = styled(CenteredFlex)`
  flex-direction: column;
  background: #ececec;
  border-radius: 7px;

  &.expanded {
    img {
      transform: rotate(0deg);
    }

    .Expandable-Header {      
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
  
`

export const ExpandableContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: #ececec;
  border-radius: 7px;
  width: calc(100% - 40px);
  font-weight: 500;
  cursor: pointer;

  &:hover {

    .Expand-Icon {
      background: #fff;
    }
  }
`

export const ExpandIconContainer = styled(CenteredFlex)`
  width: 40px;
  height: 40px;
  border-radius: 20%;
  transition: all 0.3s ease;

  img {
    width: 15px;
    height: 15px;
    transform: rotate(-90deg);
  }
`

export const ExpandableContent = styled.div`
  display: flex;
  width: calc(100% - 30px);
  padding: 21px 15px;
  background: #ececec;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
`

export const Divider = styled.div`
  background: #fff;
  width: calc(100% - 60px);
  height: 1.5px;
`