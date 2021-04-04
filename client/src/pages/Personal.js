import React, { useState, useEffect }from 'react';
import PersonalInfo from '../components/PersonalInfo';
import EditPersonalInfo from '../components/EditPersonalInfo';
import { getLocalStorage, getToken } from '../utils/utils';
import axios from '../axios';
import { useFormik } from 'formik';

const validate = values => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Email is required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
	}
	if (!values.name) {
		errors.name = 'FullName is required';
	} 
	if (!values.bio) {
		errors.bio = 'Bio is required';
	} 
	
	return errors;
}

function Personal() {
	const [isEdit, setIsEdit] = useState(true);
	const [layOver, setLayOver] = useState(true);
	const { _id } = getLocalStorage();

	const onToggleEdit = () => { 
		setIsEdit(!isEdit);
	}	
	
	const onSaveHandler = async (values) => {		
		const url = `/Profiles/${values._id}`;
		const updateProfile = {
			name: values.name,
			user: values.user,
			bio: values.bio,
			imageUrl: values.imageUrl,
			phone: values.phone,
			email: values.email						
		}
		const resp =  await axios.put(url, updateProfile, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': getToken()
			}			
		});			
		if (!resp.data.errors) {
			onToggleEdit();
		}
	}
	
	const formik = useFormik({
		initialValues: {			
			name: '',
			email: '',
			imageUrl: '',
			bio: '',
			phone: '',
		},
		validate, 
		onSubmit: values => { onSaveHandler(values) } 
	})
	
	useEffect(() => {
		async function getProfile() {
			const url = `/profiles/${_id}`;
			const resp = await axios.get(url, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': getToken()
				}
			});			
			if (!resp.data.errors && resp.data.data) {				
				formik.setValues({
					...formik.values,
					...resp.data.data
				});
			}
		}
		getProfile();
	}, []);
    	
	const isValidImage = file => {       
        if (file.type.match(/image\/[a-z]*/) != null) {
            return true
        }
	}
	
	const uploadedImage = async (image) =>{	    
		const formData = new FormData();
		formData.append('file', image)
		const url = '/profiles/upload'
		const resp = await axios.post(url, formData, {			
			headers: {
				'Content-Type': 'application/json',
				'Authorization': getToken()
			}
		});
		formik.setValues({
			...formik.values,
			...resp.data.data
		});			
		setLayOver(!layOver);
	}
	const onChangeHandler = () => {
		 const image = new FormData(document.forms[0]).get('fileupload');		 
		 if (image.name !== "" && isValidImage(image)) {			
			 uploadedImage(image);			 
		}
	}			
	return (
		<div>				
			{
				isEdit  ?  <PersonalInfo onToggleEdit={onToggleEdit} formik={formik}/>
					: <EditPersonalInfo onToggleEdit={onToggleEdit}
						formik={formik} onChangeHandler={onChangeHandler}
						layOver={layOver} />
			}
	   </div>		
	)
}

export default Personal;
