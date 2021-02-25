import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';
import Social from '../components/Social';

const LoginContainer = styled.div`
	border: 1px solid #BDBDBD;
	box-sizing: border-box;
	border-radius: 24px;
	padding: 58px;
	width: 473.83px;	
	> h3, p {
		font-family: Noto Sans;
		font-style: normal;
        width: 318px;
		color: #333333;
	}
	>h3 {
		font-weight: 600;
		font-size: 18px;
		line-height: 25px;
		letter-spacing: -0.035em;
	}	
	> form {		
		margin-top: 25px;
		gap: 12px;
		display: flex;
		flex-direction: column;		
	}

	@media (max-width: 640px) {
		.app {
			padding: 48px;
		}
	}
`;



function Register() {
	return (
		<LoginContainer>	
			<Header />
			<h3> Login</h3>
			<form>
				<Input type={'email'}
					placeHolder={'Email'}
					Icons={ <PersonIcon />}
				/>			
				<Input type={'password'}
					placeHolder={'Password'}
					Icons={ <LockIcon />}
				/>
				<Button value={"Login"} />				
			</form>
			<Social
				title={'Don’t have an account yet? '}
				link={ <Link to='/'> Register </Link>}
			/>	
	   </LoginContainer>		
	)
}

export default Register;
