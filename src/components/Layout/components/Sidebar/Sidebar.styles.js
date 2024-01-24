import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: #fff;
  border-right: 2px solid #f6f6f8;
`

export const SidebarHeader = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 0px 15px;
`

export const Logo = styled.img`
  width: 65px;
  height: 65px;
`

export const SidebarTitle = styled.div`
  margin-left: 20px;
  font-weight: 600;
  font-size: 20px;
  color: #000;
`

export const SidebarContent = styled.div`
  padding: 20px 10px;
  border-top: 2px solid #f6f6f8;
  border-bottom: 2px solid #f6f6f8;
  flex: 1;
`

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const SidebarItem = styled(Link)`
  color: #000;
  padding: 10px 15px;
  border-radius: 7px;

  &.active {
    color: #fff;
    background: rgba(8,115,112,0.50);
    box-shadow: 0 0px 25px rgb(34 41 47 / 10%);

    &:hover {
      background: rgba(8,115,112,0.50);
    }
  }

  &:hover {
    background: rgba(8, 115, 112, 0.12);
  }
`

export const AppLink = styled(Link)`
  display: flex;
  align-items: center;
`

export const SidebarFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 14px;
  opacity: 0.8;
  text-align: center;
  line-height: 22px;
`