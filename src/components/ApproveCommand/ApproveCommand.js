import React from 'react';

import * as S from './ApproveCommand.styles';
import checkmarkPic from 'images/checkmark.png';
import deletePic from 'images/delete.png';

export const ApproveCommand = ({
	commandId,
	isAccepted,
	approveCommand,
}) => {
	return (
		<S.ApproveCommandContainer>
			<S.Button
				onClick={() =>
					approveCommand({
						accept: true,
						studentCommandId: +commandId,
					})
				}
			>
				<img alt='checkmark-icon' src={checkmarkPic} />
			</S.Button>
			<S.Button
				onClick={() =>
					approveCommand({
						accept: false,
						studentCommandId: +commandId,
					})
				}
			>
				<img alt='delete-icon' src={deletePic} />
			</S.Button>
		</S.ApproveCommandContainer>
	);
};
