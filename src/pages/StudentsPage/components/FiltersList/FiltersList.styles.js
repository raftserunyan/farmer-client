import styled from 'styled-components'

export const FiltersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 450px;
  height: 100%;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  padding: 0px 10px;

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
`
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;

  .Command {
    margin-top: 10px;
    gap: 10px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: flex-end;
  gap: 10px;

  .Button {
    width: 200px !important;
  }
`
