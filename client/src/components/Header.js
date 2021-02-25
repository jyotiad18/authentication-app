import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/devchallenges.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import DropDown from './DropDown';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;  
  margin-bottom: 20px;
  width: 100%;
`;

const LoggedContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   color: #333333;
   >img {
	   width: 32px;
	  height: 36.69px;
	  border-radius: 12px;
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
	return (
		<HeaderContainer>	
			<img src={logo} alt="devchanlleng" />
			{
				isLogin ? 
				<LoggedContainer>
					<img src="" alt="" />
					<h3>Xanthe Neal</h3>
					{dropdown ?
						<>
							<ArrowDropUpIcon onClick={() => { setDropdown(!dropdown) }} />
							<DropDown />
						</>
						: <ArrowDropDownIcon onClick={() => { setDropdown(!dropdown) }} />}
					</LoggedContainer>
				: null
			}
		</HeaderContainer>		
	)
}

export default Header;
