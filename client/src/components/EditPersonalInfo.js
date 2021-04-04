import React from 'react';
import styled from 'styled-components';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Input from './Input';
import Button from './Button';
import ImageUploader from './ImageUploader';

const EditPersonalInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	justify-items: center;
	align-items: center;
	color: #000000;
	font-family: Noto Sans;
	padding: 25px 0px;	
`;
const PersonalDetail = styled.div`
	border: 1px solid #E0E0E0;	
	border-radius: 12px;
	width: 800px;	
	display: flex;
	flex-direction: column;
	padding: 28px 49px;	
	 > form {	
	  width: 416.93px;
	  gap: 20px;
	  display: flex;
	  flex-direction: column;
  }
  @media (max-width: 640px) {
	  width: 350px;
	  padding: 10px;
	  > form {
		  width: auto;
	  }
	}
`;
const ProfileHeader = styled.div`
   display: flex;
   flex-direction: column;
   > h3 {
	   font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 33px;
		letter-spacing: -0.035em;
    }
  > p {
	  font-style: normal;
	  font-weight: 500;
	 font-size: 13px;
	 line-height: 18px;
	 letter-spacing: -0.035em;
	 color: #828282;
  }   
`;
const BackContent = styled.div`
	display: flex;	
	align-items: center;
	color: #2D9CDB;	
	font-style: normal;
	font-weight: normal;
	margin-right: auto;
	margin-left: 240px;
	margin-bottom: 20px;
	cursor: pointer;
	> span {	
		font-size: 18px;
		line-height: 25px;	
		letter-spacing: -0.035em;
	}
	@media (max-width: 1024px) {
		margin-left: 100px;
	}

	@media (max-width: 768px) {
		margin-left: 0px;
	}

	@media (max-width: 640px) {
		margin-left: 0px;
	}
`;

function EditPersonalInfo({ onToggleEdit, onChangeHandler, layOver, formik }) {	
	return (
		<EditPersonalInfoContainer>	
			<BackContent onClick={() => { onToggleEdit(); } }>
				<KeyboardArrowLeftIcon />
				<span>Back</span>
			</BackContent>
			<PersonalDetail>
				<ProfileHeader>
					<h3>Change Info</h3>
					<p>Changes will be reflected to every services</p>
				</ProfileHeader>
				<form onSubmit={ formik.handleSubmit }>
					<ImageUploader imageUrl={formik.values.imageUrl} onChangeHandler={onChangeHandler} layOver={layOver}/>
					<Input type="text" placeHolder={'Enter your name...'}
						Icons={null}
						label={'Name'}
						name={'name'}
						dataValue={formik.values.name}
						onInputChangeHandler={formik.handleChange}
						errors={formik.errors.name}
					/>
					<Input type="textarea" placeHolder={'Enter your bio...'}
						Icons={null}
						label={'bio'}
						name={'bio'}
						dataValue={formik.values.bio}
						onInputChangeHandler={formik.handleChange}
						errors={formik.errors.bio}
					/>
					<Input type="text" placeHolder={'Enter your phone...'}
						Icons={null}
						label={'PhoneNumber'}
						name={'phone'}
						dataValue={formik.values.phone}
						onInputChangeHandler={formik.handleChange}
					/>
					<Input type="email" placeHolder={'Enter your email...'}
						Icons={null}
						label={'Email'}
						name={'email'}
						dataValue={formik.values.email}
						onInputChangeHandler={formik.handleChange}
						errors={formik.errors.email}
					/>
					<Input type="password" placeHolder={'Enter your password...'}
						Icons={null}
						label={'Password'}	
						name={'password'}
						onInputChangeHandler={formik.handleChange}
					/>
					<Button value={"Save"} width={'82px'}/>
				</form>
			</PersonalDetail>			
	   </EditPersonalInfoContainer>		
	)
}

export default EditPersonalInfo;