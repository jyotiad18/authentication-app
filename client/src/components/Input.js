import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column; 
  >label {
	    font-family: Noto Sans;
		font-style: normal;
		font-weight: 500;
		font-size: 13px;
		line-height: 18px;
		letter-spacing: -0.035em;
		color: #4F4F4F;
    } 
`;

const InputSection = styled.div`
  display: flex;
  border: 1px solid #BDBDBD;
  border-radius: 8px;   
  padding: 14px 16px;
  gap: 10px;
  color: #828282;
  > input {
	flex: 1;
	font-family: Noto Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 22px;
	letter-spacing: -0.035em;
	background-color: none
  }
`;
const ErrorSection = styled.div`
  display: flex;
  border-radius: 8px; 
  padding: 5px; 
  font-family: Noto Sans; 
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  color: red;
 `;

function Input({ type, placeHolder, Icons, label, name,
	dataValue,
	onInputChangeHandler,
	errors
}) {		
	return (
		<InputContainer>
			<label forhtml={label}>{ label }</label>
			<InputSection>
				{Icons}	
				{
					type === 'textarea' ? 
						<textarea
							placeholder={placeHolder}
							id={name}							
							name={name}
							rows="4"
							value={ dataValue }
							onChange={onInputChangeHandler}
					    />
						:
						<input type={type}
							placeholder={placeHolder}
							id={name}
							name={name}
							value={dataValue}
							onChange={onInputChangeHandler}
							autoComplete={type === 'password' ? 'current-password' : ''}
						/>						  
				}				
			</InputSection>	
			{errors ? 
				<ErrorSection>{ errors }</ErrorSection>
			: null}
		</InputContainer>		
	)
}

export default Input;
