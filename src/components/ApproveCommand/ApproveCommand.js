import React from 'react';

import * as S from './ApproveCommand.styles';
import checkmarkPic from 'images/checkmark.png';
import deletePic from 'images/delete.png';

export const ApproveCommand = ({ commandId, isAccepted, approveCommand }) => {
  return (
    <S.ApproveCommandContainer>
      <S.Button
        onClick={() =>
          approveCommand({ accept: true, studentCommandId: +commandId })
        }
      >
        <img src={checkmarkPic} />
      </S.Button>
      <S.Button
        onClick={() =>
          approveCommand({ accept: false, studentCommandId: +commandId })
        }
      >
        <img src={deletePic} />
      </S.Button>
    </S.ApproveCommandContainer>
  );
};
