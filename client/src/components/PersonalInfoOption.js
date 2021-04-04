import React from 'react';
import styled from 'styled-components';

const PersonalInfoOptionContainer = styled.div`
    display: flex;
	border-top:1px solid #D3D3D3;
	font-family: Noto Sans;
	font-style: normal;
	font-weight: 500;
	align-items: center;
	padding: 27px 49px;	
	>h4 {				
		font-size: 13px;
		line-height: 18px;		
		letter-spacing: -0.035em;
		color: #BDBDBD;	
		width: 189px;
		text-transform:uppercase;
	}
	>h5 {
		font-size: 18px;
		line-height: 25px;
		letter-spacing: -0.035em;
		color: #333333;
		text-align: left;
	}
	>img {
		height: 72px;
		width: 72px;
		border-radius: 8px;
		border: 1px solid #000;
		padding: 2px;
	}
	@media (max-width: 640px) {
		flex-direction: column;
		align-items: flex-start;
		padding: 15px;
		gap: 10px;
		>h4 {
			width: auto;
		}
	}

`;

function PersonalInfoOption({ title, value }) {
	return (
		<PersonalInfoOptionContainer>	
			<h4>{title}</h4>
			{ title === 'photo' ?
				<img src={value} alt="" />
				: 
				<h5>{ value }</h5>
			}
	   </PersonalInfoOptionContainer>		
	)
}

export default PersonalInfoOption;