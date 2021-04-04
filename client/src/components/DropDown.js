import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import DropDownOption from './DropDownOption';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GroupIcon from '@material-ui/icons/Group';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { clearLocalStorage } from '../utils/utils';

const DropDownContainer = styled.div`     	
	z-index: 1;
	width: 188px;	
	position: absolute;
	margin-left: auto;
	border-radius:12px;
	top: 73px;
	right: 72px;
	border: 1px solid green;
	padding: 11px;
	background: #FFFFFF;
	border: 1px solid #E0E0E0;	
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
	border-radius: 12px;	
`;

const LineContent= styled.div`
   width: 100%;
   border: 1px solid #E0E0E0;
  transform: rotate(0deg);
`;

function DropDown({ value, onDropDownClick }) {
	const history = useHistory();

	const onClickHandler = (title) => {	
		onDropDownClick();
		switch (title.toLowerCase()) {
			case 'my profile':
				history.push('/profile');
				break;
			case 'logout':
				onLogoutHandle();
				break;
			default:
				break;
		}
	}

	const onLogoutHandle = () => {
		clearLocalStorage();
		history.push('/login');
	}
	
	return (	
		<DropDownContainer>	
			<DropDownOption Icon={<AccountBoxIcon />}
				title={'My Profile'}
				onClickHandler={ onClickHandler }
			/>
			<DropDownOption Icon={<GroupIcon />}
				title={'Group Chat'}
				onClickHandler={ onClickHandler }
			/>
			<LineContent />
			<DropDownOption Icon={<ExitToAppIcon />}
				title={'Logout'} onClickHandler={ onClickHandler } />			
		</DropDownContainer>					
	)
}

export default DropDown;