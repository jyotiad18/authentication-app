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
`;

function EditPersonalInfo({ onToggleEdit }) {
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
				<form>
					<ImageUploader />
					<Input type="text" placeHolder={'Enter your name...'}
						Icons={null}
						label={ 'Name'}
					/>
					<Input type="textarea" placeHolder={'Enter your bio...'}
						Icons={null}
						label={ 'Bio'}
					/>
					<Input type="text" placeHolder={'Enter your phone...'}
						Icons={null}
						label={ 'PhoneNumber'}
					/>
					<Input type="email" placeHolder={'Enter your email...'}
						Icons={null}
						label={ 'Email'}
					/>
					<Input type="password" placeHolder={'Enter your password...'}
						Icons={null}
						label={ 'Password'}
					/>
					<Button value={"Save"} width={ '82px' }/>
				</form>
			</PersonalDetail>			
	   </EditPersonalInfoContainer>		
	)
}

export default EditPersonalInfo;