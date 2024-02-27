import styled from 'styled-components';

export const CustomSpan = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const CustomRadio = styled.input.attrs({ type: 'radio' })`
    margin: 0;
    appearance: none;
    width: 20em;
    height: 3em;
    background-color: rgb(217, 217, 217);
    outline: none;
    transition: 0.1s all linear;
    vertical-align: middle;
    box-shadow: inset -1px -1px 3px rgb(90, 90, 90), inset -3px -3px 5px rgb(163, 163, 163), inset 2px 2px 3px rgb(255, 255, 255), inset 4px 4px 5px rgb(225, 225, 225);

    &:checked {
        background: rgba(54, 145, 140, 1);
        box-shadow: inset -1px -1px 3px rgb(147, 220, 216), inset -3px -3px 5px rgb(125, 200, 195), inset 1px 1px 3px rgb(14, 49, 47), inset 2px 2px 4px rgb(55, 97, 94);
    }
`;

export const CustomLabel = styled.label`
    position: relative;
    cursor: pointer;
    display: inline-block;
	font-size: 18px;
  	font-weight: 500;
	color: #212121;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const FlexColumn = styled.div`
    display: flex; 
    flex-direction: column;
`;

export const FlexRow = styled.div`
    display: flex; 
    flex-direction: row;
`;

export const CreditsPageContainer = styled.div`
    width: calc(100% - 60px);
    padding: 30px;
    display: flex;
    gap: 30px;
`;

export const RadioInputs = styled.div`
	margin: 0 0 30px 0;
`;
