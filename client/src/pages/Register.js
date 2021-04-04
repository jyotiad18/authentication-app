import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';
import Social from '../components/Social';
import axios from '../axios';
import { useFormik } from 'formik';

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
		width: 350px;
		padding: 58px 20px;
	}

	@media (max-width: 320px) {
		width: 315px;
		padding: 58px 10px;
		>h3, p  {
			width: 300px;
		}
		>h3 {
			font-size: 15px;
		   line-height: 20px;			
		}
		>p {
			font-size: 14px;
			line-height: 22px;
		}
	}
`;

const validate = values => {
	const errors = {};
	if (!values.displayName) {
		errors.displayName = 'DisplayName is required';
	}
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
function Register() {
	const history = useHistory(); 
	const formik = useFormik({
		initialValues: {
			displayName: '',
			email: '',
			password: ''
		},
		validate,
		onSubmit: values => { registerUser(values); }
	})
	async function registerUser(values) {
		const url = "/users";
		const resp =  await axios.post(url, values, {
			headers: {
				'Content-Type': 'application/json',
			}			
		});		
		if (resp.data.errors === null)
		{
			history.push('/login');
		}
	}	
	return (
		<RegisterContainer>	
			<Header />
			<h3> Join thousands of learners from around the world</h3>
			<p>Master web development by making real-life projects.
				 There are multiple paths for you to choose</p>
			<form onSubmit={formik.handleSubmit}>
				<Input type={'text'}
					placeHolder={'Display Name'}
					Icons={<PersonIcon />}
					name={'displayName'}
					dataValue={formik.values.displayName}
					onInputChangeHandler={formik.handleChange}
					errors={formik.errors.displayName}
				/>
				<Input type={'text'}
					placeHolder={'Email'}
					Icons={<EmailIcon />}					
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
				<Button value={"Start coding now"} type={'submit'} />				
			</form>
			<Social
				title={'Adready a member? '}
				link={ <Link to='/login'> Login </Link>}
			/>		
	   </RegisterContainer>		
	)
}

export default Register;
