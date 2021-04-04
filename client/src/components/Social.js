import React from 'react';
import styled from 'styled-components';
import google from '../images/Google.svg';
import github from '../images/Gihub.svg';
import twitter from '../images/Twitter.svg';
import facebook from '../images/Facebook.svg';
import FacebookLogin from 'react-facebook-login';
import axios from '../axios';

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
   >img {
	   cursor: pointer;
   }
   >img:hover {
	   color: darkblue;
   }
`;

function Social({ title, link }) {
	const onClickHandler = async (e) => {	
	
		const width = 600,
		height = 600;
		const left = window.innerWidth / 2 - width / 2;
		const top = window.innerHeight / 2 - height / 2;  		
    	let url;
		if (process.env.NODE_ENV === 'production') {      
		} else {
			url = `http://localhost:5600/api/socalAuths/${e.target.alt}`;
		}		
		
		return window.open(
		url,
		'_self',
		`toolbar=no, location=no, directories=no, status=no, menubar=no,
			scrollbars=no, resizable=no, copyhistory=no, width=${width},
			height=${height}, top=${top}, left=${left}`
		);		
    };
	return (	
		<SocialContainer>
				<p>or continue with these social profile</p>
				<SocialOptions>
					<img src={google} alt="google" />
					<img src={facebook} alt="facebook" onClick={onClickHandler} />
					<img src={github} alt="github" />
					<img src={twitter} alt="twitter" />
				</SocialOptions>				
			<p> {title}	{link}</p>
			</SocialContainer>					
	)
}

export default Social;