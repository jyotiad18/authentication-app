import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';
import Social from '../components/Social';
import axios from '../axios';
import { setLocalStroage } from '../utils/utils';
import { useFormik } from 'formik';

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
		width: 350px;
		padding: 58px 20px;
	}

	@media (max-width: 320px) {
		width: 310px;
		padding: 58px 10px;		
	}
`;

const validate = values => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Email is required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 8) {
		errors.password = 'Must be more than 8 characters';
	}
	
	return errors;
}
function Login() {
	const history = useHistory();	

	async function login(values) {
		const url = "/auths/login";
		const resp =  await axios.post(url, values, {
			headers: {
				'Content-Type': 'application/json',
			}
		});		
		const { token, user } = resp.data.data;
		if (user !=  null)
		{		
			setLocalStroage(token, user);
			history.push('/dashboard')
		} 
	}

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validate,
		onSubmit: values => { login(values); }
	})
	
	return (
		<LoginContainer>	
			<Header />
			<h3> Login</h3>
			<form onSubmit={ formik.handleSubmit }>
				<Input type={'email'}
					placeHolder={'Email'}
					Icons={<PersonIcon />}
					name={'email'}
					dataValue={formik.values.email}
					onInputChangeHandler={formik.handleChange}
					errors={formik.errors.email}
				/>			
				<Input type={'password'}
					placeHolder={'Password'}
					Icons={<LockIcon />}
					name={'password'}
					dataValue={formik.values.password}
					onInputChangeHandler={formik.handleChange}
					errors={formik.errors.password}
				/>
				<Button value={"Login"} type={'submit'} />				
			</form>
			<Social
				title={'Don’t have an account yet? '}
				link={ <Link to='/'> Register </Link>}
			/>	
	   </LoginContainer>		
	)
}

export default Login;
