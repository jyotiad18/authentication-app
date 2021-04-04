import React from 'react';
import styled from 'styled-components';


const DashboardContainer = styled.div`
	border: 1px solid #BDBDBD;	
	width:auto;
    height: 80vh;
	justify-content: center;
	justify-items: center;
	align-items: center;
	border-radius: 5px;	
	
	@media (max-width: 640px) {
		.app {
			padding: 48px;
		}
	}
`;

function DashBoard() {	
	return (
		<DashboardContainer>
		</DashboardContainer>
	)
}

export default DashBoard;