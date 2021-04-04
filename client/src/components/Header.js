import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../images/devchallenges.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import DropDown from './DropDown';
import profilePict from '../images/profilePhoto.png';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;  
  margin-bottom: 20px;
  min-width: 100%;  
`;

const LoggedContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;  
   gap: 10px;
   color: #333333;
   >img {
	  border: 1px solid #000;
	  width: 32px;
	  height: 36.69px;
	  border-radius: 12px;
	  padding: 2px;
   }
   >h3 {
	   font-family: Noto Sans;
	   font-style: normal;
       font-weight: bold;
       font-size: 12px;
       line-height: 16px;
       letter-spacing: -0.035em;
   }

`;

function Header() {	
	const [dropdown, setDropdown] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const [displayName, setDisplayName] = useState('');
	const [photoUrl, setPhotoUrl] = useState('');

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user != null) {
			setIsLogin(true);
			setDisplayName(user.displayName);
			setPhotoUrl(user.image);
		}
	}, [])
	
	const onDropDownClick = () => {
		setDropdown(!dropdown)
	}
	return (
		<HeaderContainer>	
			<img src={logo} alt="devchanlleng" />
			{
				isLogin ? 
				<LoggedContainer>
					<img src={photoUrl !== null ? photoUrl : profilePict} />
					<h3>{ displayName }</h3>
					{dropdown ?
						<>
							<ArrowDropUpIcon onClick={ onDropDownClick } />
								<DropDown onDropDownClick={ onDropDownClick }/>
						</>
						: <ArrowDropDownIcon onClick={ onDropDownClick } />}
					</LoggedContainer>
				: null
			}
		</HeaderContainer>		
	)
}

export default Header;
