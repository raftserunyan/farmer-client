import styled from 'styled-components/macro'

export const LayoutContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.mainBackground} !important;
  height: 100%;

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
`

export const LayoutContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 80px;
  overflow-y: hidden;

  > div {
    overflow-y: auto;
    height: calc(100% - 60px);
    ::-webkit-scrollbar {
      width: 10px;
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
  }
`

export const LayoutHeader = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 10;
`

export const SidebarContainer = styled.div`
  display: flex;
`

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  &.blur {
    filter: blur(2.5px);
  }
`