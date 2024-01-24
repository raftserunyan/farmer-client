import styled from 'styled-components'

import { CenteredFlex } from 'ui/styles'

export const StudentProfilePageContainer = styled.div`
  width: calc(100% - 60px);
  padding: 30px;
  display: flex;
  justify-content: center;
`

export const StudentProfilePageWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 1280px;
`

export const InfoItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
`

export const InfoItem = styled.div`
  display: flex;
  padding: 15px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  justify-content: space-between;

  &:first-child {
    padding-top: 0px;
  }

  &:last-child {
    padding-bottom: 0px;
    border-bottom: none;
  }
`

export const MainInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-width: 265px;
  padding: 20px;
  width: 305px;
  min-height: 500px;
  height: min-content;
  background: #fff;
  border-radius: 7px;
  // gap: 10px;
`

export const AllInfoContainer = styled(CenteredFlex)`
  flex: 1;
  background: #fff;
  border-radius: 7px;
  height: min-content;
  min-height: 540px;
  display: flex;
  align-items: flex-start;
`

export const StudentProfilePic = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin-top: 20px;
  object-fit: cover;
`

export const StudentName = styled.div`
  color: #000;
  margin-top: 10px;
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  gap: 7px;

  .danger {
    flex: 1;
  }
  .main {
    flex: 1.5;
  }
`

export const ProfessionType = styled(CenteredFlex)`
  top: 0px;
  right: 0px;
  min-width: 100px;
  padding: 5px 15px;
  position: absolute;
  color: #fff;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 7px;
  background: ${({ theme }) => theme.colors.green};
`

export const TabContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  .Table {
    border-radius: 0px;
  }
`
