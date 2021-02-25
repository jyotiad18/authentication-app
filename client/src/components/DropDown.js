import React from 'react';
import styled from 'styled-components';
import DropDownOption from './DropDownOption';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GroupIcon from '@material-ui/icons/Group';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const DropDownContainer = styled.div`     	
	z-index: 1;
	width: 188px;	
	position: absolute;
	margin-left: auto;
	border-radius:12px;
	top: 83px;
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


function DropDown({ value }) {
	return (	
		<DropDownContainer>	
			<DropDownOption Icon={<AccountBoxIcon />}
				title={'My Profile'} />
			<DropDownOption Icon={<GroupIcon />}
				title={'Group Chat'} />
			<LineContent />
			<DropDownOption Icon={<ExitToAppIcon />}
				title={'Logout'} />			
		</DropDownContainer>					
	)
}

export default DropDown;