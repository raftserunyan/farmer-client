import styled from 'styled-components';
import { CenteredFlex } from 'ui/styles';

export const InvestorDetailsContainer = styled.div`
	display: flex;
	align-items: center;
	background: #fff;
	border-radius: 15px;
	margin-top: -20px;
	padding-bottom: 20px;
	min-width: 1050px;
	flex-direction: column;
	gap: 10px;
	position: relative;
	overflow: hidden;

	.Tab-Item {
		font-weight: 600;
	}
`;

export const FormHeaderContainer = styled.div`
	display: flex;
	align-items: center;
	// padding: 0px 15px;
	width: 100%;
	justify-content: space-between;
	border-bottom: 2px solid #f6f6f8;
`;

export const HeaderTitle = styled.div`
	font-size: 16px;
	font-weight: 500;
`;

export const CloseFormContainer = styled(CenteredFlex)`
	width: 45px;
	height: 45px;
	position: absolute;
	top: 10px;
	right: 10px;
	border-radius: 20%;
	cursor: pointer;
	align-self: flex-start;
	transition: background 0.3s ease;

	&:hover {
		background: #f6f6f8;
	}
`;

export const CloseFormIcon = styled.img`
	width: 15px;
	heigth: 15px;
	object-fit: cover;
`;

export const FormContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 30px);
	padding: 0px 15px;
	align-items: center;
	gap: 10px;
`;

export const TabContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px;
	width: 100%;

	tbody {
		min-height: 230px !important;
	}
`;

export const TotalAmount = styled.div`
	margin-bottom: 10px;
	font-weight: 600;
`;
