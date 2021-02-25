import React from 'react';
import styled from 'styled-components';
import google from '../images/Google.svg';
import github from '../images/Gihub.svg';
import twitter from '../images/Twitter.svg';
import facebook from '../images/Facebook.svg';

const SocialContainer = styled.div`
   display: flex;
   flex-direction: column;
   color: #828282;   
   align-items: center;
   gap: 15px;
   margin-top: 20px;
   > p {
	   font-family: Noto Sans;
	   font-style: normal;
	   font-weight: normal;
	   font-size: 14px;
	   line-height: 19px;
	   letter-spacing: -0.035em;
	   text-align: center;

	   > a {
		 color: #2F80ED !important;
	   }
   }
`;

const SocialOptions = styled.div`
   display: flex;
   gap: 10px;
`;

function Social({ title, link }) {
	return (	
		<SocialContainer>
				<p>or continue with these social profile</p>
				<SocialOptions>
					<img src={google} alt="google" />
					<img src={facebook} alt="facebook" />
					<img src={github} alt="github" />
					<img src={twitter} alt="twitter" />
				</SocialOptions>				
			<p> {title}	{link}</p>
			</SocialContainer>					
	)
}

export default Social;