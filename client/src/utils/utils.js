function setLocalStroage(token, user) {
	const accessToken = `Bearer ${token}`;
    localStorage.setItem('user', JSON.stringify(user));
	localStorage.setItem('accessToken', JSON.stringify(accessToken));	
}

function clearLocalStorage() {	
    localStorage.clear('user');
	localStorage.clear('accessToken');	
}

function getLocalStorage() {
	return JSON.parse(localStorage.getItem('user'));
}

function getToken() {
	localStorage.getItem('accessToken');
	return localStorage.getItem('accessToken');
}


export {
	setLocalStroage,
	clearLocalStorage,
	getLocalStorage,
	getToken
};