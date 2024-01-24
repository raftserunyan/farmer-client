import React from 'react'

import * as S from './Info.styles'

export const Info = ({
  profileData
}) => {
  return (
    <S.InfoContainer>
      <S.InfoItemsList>
        <S.InfoItem>
          Կարգավիճակ: { profileData.status.name }
        </S.InfoItem>
        <S.InfoItem>
          Ընդունման հրամանի համար: { profileData.acceptanceCommandNumber }
        </S.InfoItem>
        <S.InfoItem>
          Հեռախոսահամարներ: { profileData.contactNumbers.join(', ') }
        </S.InfoItem>
        <S.InfoItem>
          Առողջական վիճակ: { profileData.healthStatus.status }
        </S.InfoItem>
        <S.InfoItem>
          Գրանցման հասցե: { profileData.registrationAddress }
        </S.InfoItem>
        <S.InfoItem>
          Բնակման հասցե: { profileData.registrationAddress }
        </S.InfoItem>
        <S.InfoItem>
          Ազգություն: { profileData.nationality.name }
        </S.InfoItem>
        <S.InfoItem>
          Քաղաքացիություն: { profileData.citizenship.country }
        </S.InfoItem>
        <S.InfoItem>
          Զինկոմիսարիատ: { profileData.commissariat.name }
        </S.InfoItem>
      </S.InfoItemsList>
    </S.InfoContainer>
  )
}
