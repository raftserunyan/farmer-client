import styled from 'styled-components';

export const FiltersListContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	height: 100%;
`;

export const List = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const ActionsContainer = styled.div`
	display: flex;
	margin-top: auto;
	justify-content: flex-end;
	gap: 10px;

	.Button {
		width: 200px !important;
	}
`;

export const RowContainer = styled.div`
	display: flex;
	gap: 15px;

	.Date-Picker {
		flex: 1;
	}

	.Custom-Position {
		div[class^='CalendarContainer-'] {
			right: 45px;
		}
	}
`;
