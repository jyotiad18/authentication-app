import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`     
	> button {		    
			background: #2F80ED;
			border-radius: 8px;	
			font-family: Noto Sans;
			font-style: normal;
			font-weight: 600;
			font-size: 16px;
			line-height: 22px;
			text-align: center;
			letter-spacing: -0.035em;
			color: #FFFFFF;	
			padding: 12px;
			outline: none;	
		}
`;

function Button({ value, type , width = '100%', onClickHandler}) {
	return (	
		<ButtonContainer>
			<button
				type={ type !== undefined ? type : 'none' }
				style={{ width: width }}
				onClick={(typeof onClickHandler === 'function') ? () => onClickHandler() : null }
			>{value}</button>
		</ButtonContainer>					
	)
}

export default Button;