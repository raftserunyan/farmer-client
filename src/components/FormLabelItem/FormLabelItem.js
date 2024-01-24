import React from 'react';

import * as S from './FormLabelItem.styles';
import cx from 'classnames';

export const FormLabelItem = ({ label, disabled, children }) => {
  return (
    <S.FormLabelItemContainer className="FormLabelItem">
      <S.Label>{label}</S.Label>
      <S.DisabledWrapper className={cx({ disabled })} />
      {children}
    </S.FormLabelItemContainer>
  );
};
