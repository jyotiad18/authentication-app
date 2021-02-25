import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';
import Social from '../components/Social';

const RegisterContainer = styled.div`
	border: 1px solid #BDBDBD;
	box-sizing: border-box;
	border-radius: 24px;
	padding: 58px;
	width: 473.83px;
	justify-content: center;
	justify-items: center;
	align-items: center;	
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
	> p {
		font-weight: normal;
		font-size: 16px;
		line-height: 22px;
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
		<RegisterContainer>	
			<Header />
			<h3> Join thousands of learners from around the world</h3>
			<p>Master web development by making real-life projects.
				 There are multiple paths for you to choose</p>
			<form>
				<Input type={'text'}
					placeHolder={'Full Name'}
					Icons={ <PersonIcon />}
				/>
				<Input type={'text'}
					placeHolder={'Email'}
					Icons={ <EmailIcon />}
				/>
				<Input type={'password'}
					placeHolder={'Password'}
					Icons={ <LockIcon />}
				/>
				<Button value={"Start coding now"} />				
			</form>
			<Social
				title={'Adready a member? '}
				link={ <Link to='/login'> Login </Link>}
			/>		
	   </RegisterContainer>		
	)
}

export default Register;
