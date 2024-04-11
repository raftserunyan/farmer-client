import styled from 'styled-components';

export const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
`;

export const CreditsPageContainer = styled.div`
	width: calc(100% - 30px);
	padding: 15px 30px;
	display: flex;
	gap: 30px;

	tbody {
		min-height: 200px !important;
	}
`;

export const RadioInputs = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	margin-bottom: 15px;

	.Button {
		width: 300px;
	}
`;
