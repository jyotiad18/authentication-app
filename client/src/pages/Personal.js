import React, { useState }from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import PersonalInfo from '../components/PersonalInfo';
import EditPersonalInfo from '../components/EditPersonalInfo';

const PersonalContainer = styled.div`
	border-radius: 24px;
	padding: 26px 72px 0px 72px;	
	width: 100%;		
`;

function Personal() {
	const [isEdit, setIsEdit] = useState(true);
    
	const onToggleEdit = () => { 
		setIsEdit(!isEdit);
	}
	return (
		<PersonalContainer>	
			<Header />
			{
				isEdit ? 
				<PersonalInfo onToggleEdit={onToggleEdit} />
				: <EditPersonalInfo onToggleEdit={onToggleEdit} />
			}
	   </PersonalContainer>		
	)
}

export default Personal;
