import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 60px);
  background: #fff;
  height: 80px;
  padding: 0px 30px;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.lightGreen};
  box-shadow: rgb(0 0 0 / 4%) 0px 7px 14px;
  
  .Dropdown-Content {
    left: -50px;
  }

  .Header-Items-Dropdown {
    top: 90px;
  }

  .Dropdown-Items {
    text-align: center;
    gap: 3px;

    .Header-Item {
      color: #000;
      padding: 15px 20px;

      &.active {
        color: #fff;
      }

      &:hover {
        color: #fff;
      }
    }
  }
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: end;
  cursor: pointer;
  padding-left: 40px;
`

export const DropdownName = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  height: 100%;
  padding: 0px 40px;
  transition: all 0.3s ease;
  color: #fff;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const Name = styled.div`
  color: #fff;
`

export const Role = styled.div`
  font-size: 12px;
  color: #6e6b7b;
`

export const UserInfo = styled.div`
  display: flex;
  gap: 3px;
  flex-direction: column;
`

export const UserPic = styled.img`
  width: 50px;
  height: 50px;
`

export const DropdownItems = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  padding: 10px 0px;
`

export const Item = styled.div`
  cursor: pointer;
  padding: 5px 15px;

  &:hover {
    background: rgba(8, 115, 112, 0.12);
  }
`

export const HeaderItemsList = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: space-around;

  ::-webkit-scrollbar {
    height: 10px;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #eeeeee; 
    border-radius: 10px;
  }
   
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.green};
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.lightGreen};
  }

  > div {
    display: flex;
    justify-content: center;
    height: 100%;
  }
`

export const HeaderItem = styled(Link)`
  color: #fff;
  white-space: pre;
  height: 100%;
  font-weight: 500;
  padding: 0px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }

  &.active {
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const HomeContainer = styled.div`
  display: flex;
  padding-right: 40px;

  img {
    width: 80px;
    height: 60px;
  }
`

export const SidebarTitle = styled.div`
  margin-left: 5px;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  white-space: pre;
`
export const AppLink = styled(Link)`
  display: flex;
  align-items: center;
`