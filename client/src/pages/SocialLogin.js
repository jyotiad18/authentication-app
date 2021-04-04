import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../axios';
import { setLocalStroage }  from '../utils/utils';

const LoaderContainer = styled.div`
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

   @-webkit-keyframes spin {
		0% { -webkit-transform: rotate(0deg); }
		100% { -webkit-transform: rotate(360deg); }
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
  `;

function SocialLogin() {	
	const { socialID } = useParams();	
	const history = useHistory();
	useEffect(() => {  
		async function getSocialLogin() {
			const url = `/auths/sociallogin/${socialID}`;			
			const resp = await axios.get(url);
			const { token, user } = resp.data.data;
		if (user !=  null)
		{		
			setLocalStroage(token, user);
			history.push('/dashboard')
		} 
		}
		getSocialLogin();  
	}, []) 
	
	return (
		<LoaderContainer />
	)
}

export default SocialLogin;
