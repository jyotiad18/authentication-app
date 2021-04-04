import React from 'react';
import styled from 'styled-components';

const DropDownOptionContainer = styled.div`
	display: flex;
	padding: 11px;
	align-items: center;
	color: #4F4F4F;
	gap: 10px;	
	>span { 
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: -0.035em;				
	}	
`;

function DropDownOption({ Icon, title, onClickHandler }) {
	return (	
		<DropDownOptionContainer onClick={ () => onClickHandler(title) }>
			{Icon}
			<span>{title}</span>
		</DropDownOptionContainer>				
	)
}

export default DropDownOption;