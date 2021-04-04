import React from 'react';
import styled from 'styled-components';
import profilePict from '../images/profilePhoto.png';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const ImageUploaderContainer = styled.div`
   display: flex;      
   align-items: center;
   gap: 15px;  
   margin-top: 20px;   
   > span {
	   font-family: Noto Sans;
		font-style: normal;
		font-weight: 500;
		font-size: 13px;
		line-height: 18px;		
		letter-spacing: -0.035em;
		color: #828282;
   }   
`;

const ImageContainer = styled.div`
   display: flex;
   flex-direction: column;  
   > img {
	   width: 72px;
	   height: 72px;
	   border-radius: 8px;
   } 
`;

const ImageLayer = styled.div`
   display: flex;
   position: absolute;
   flex-direction: column;
   z-index: 1;
   background: rgba(20, 20, 20, 0.45);
   border-radius: 16px;
   width: 72px;
   height: 72px;
   justify-content: center;
   align-items: center;
   color: #fff;  
   padding-top:20px; 
   cursor: pointer;  
   >input {
	   opacity: 0;	  
	   z-index: -999; 
	   cursor: pointer;
   } 
   >span {
	   cursor: pointer;
   }
`;

function ImageUploader({ imageUrl, onChangeHandler, layOver}) {
		
	return (	
		<ImageUploaderContainer>
			<ImageContainer>				
				<img src={imageUrl ? imageUrl : profilePict} alt="" />
				{layOver ?
					<ImageLayer>
						<PhotoCameraIcon />
						<input type='file' accept='image/*'
							id="fileupload" name="fileupload"
							onChange={() => onChangeHandler()}
						/>
					</ImageLayer>
			   : null }
			</ImageContainer>			
			{layOver ? <span>CHANGE PHOTO</span> : null}
		</ImageUploaderContainer>					
	)
}

export default ImageUploader;