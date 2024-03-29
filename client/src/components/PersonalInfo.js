import React from 'react';
import styled from 'styled-components';
import PersonalInfoOption from './PersonalInfoOption';

const PersonalInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	justify-items: center;
	align-items: center;
	color: #000000;
	font-family: Noto Sans;
	padding: 25px 0px;
	>h3 {		
		font-style: normal;
		font-weight: normal;
		font-size: 36px;
		line-height: 49px;
		letter-spacing: -0.035em;		
	}
	>h5 {
		font-style: normal;
		font-weight: 300;
		font-size: 18px;
		line-height: 25px;		
		letter-spacing: -0.035em;
	}
	@media (max-width: 640px) {
		>h3 {
			font-size: 26px;
			line-height: 30px;
		}
		>h5 {
			font-size: 14px;
			line-height: 20px;
		}
	}
	@media (max-width: 320px) {
		>h3 {
			font-size: 26px;
			line-height: 30px;
		}
		>h5 {
			font-size: 12px;
			line-height: 15px;
		}
	}
`;
const PersonalDetail = styled.div`
	border: 1px solid #E0E0E0;	
	border-radius: 12px;
	width: 800px;	
	display: flex;
	flex-direction: column;
	
	@media (max-width: 768px) {
		width: 650px;	
	}
	@media (max-width: 640px) {
		width:350px;
	}

	@media (max-width: 320px) {
		width:300px;
	}
`;
const PersonalDetailEdit = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 28px 49px;
   >button {
	   border: 1px solid #828282;
		box-sizing: border-box;
	   border-radius: 12px;
	   padding: 8px 35px;
	   font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 22px;	
		letter-spacing: -0.035em;
		color: #828282;
		outline: none;
   }
     @media (max-width: 640px) {
		padding: 10px;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 10px;
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

function PersonalInfo({ onToggleEdit, formik }) {
	return (
		<PersonalInfoContainer>	
			<h3>Personal info</h3>
			<h5>Basic info, like your name and photo</h5>
			<PersonalDetail>
				<PersonalDetailEdit>
					<ProfileHeader>
						<h3>Profile</h3>
						<p>Some info may be visible to other people</p>
					</ProfileHeader>
					<button onClick={() => { onToggleEdit(); } }>Edit</button>
				</PersonalDetailEdit>
				<PersonalInfoOption title={'photo'} value={formik.values.imageUrl} />
				<PersonalInfoOption title={'Name'} value={formik.values.name} />
				<PersonalInfoOption title={'Bio'} value={formik.values.bio} />	
				<PersonalInfoOption title={'phone'} value={formik.values.phone} />	
				<PersonalInfoOption title={'Email'} value={formik.values.email} />	
				<PersonalInfoOption title={'Password'} value={'**********'} />	
			</PersonalDetail>							
	   </PersonalInfoContainer>		
	)
}

export default PersonalInfo;