document.querySelector('#generar-nombre').addEventListener('submit', loadNames);

// Call a Ajax and print result
function loadNames(e){
	e.preventDefault();

	//read variables
	
	const origin = document.getElementById('origen');
	const selectedOrigin = origin.options[origin.selectedIndex].value;
	
	const gender = document.getElementById('genero');
	const selectedGender = gender.options[gender.selectedIndex].value;

	const quanty = document.getElementById('numero').value;
		
	let url = '';
	// if theres an origin concat to the url
	url += 'http://uinmaes.com.api/?';

	if (selectedOrigin !== '') {
		url += `region=${selectedOrigin}&`;
	}
	// if theres an genre concat to the url
	if (selectedGender !== '') {
		url += `gender=${selectedGender}&`;
	}
	// if theres an quanty concat to the url
	if (quanty !== '') {
		url += `amount=${quanty}&`;
	}

	const xhr = new XMLHttpRequest();
	
}