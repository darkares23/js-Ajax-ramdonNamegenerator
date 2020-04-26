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
	url += 'http://uinames.com.api/?';

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
	// init http request
	const xhr = new XMLHttpRequest();
	// open conection
	xhr.open('GET', url, true);
	// data and tempolate render
	xhr.onload = function(){
		if (this.status === 200){
			const names = JSON.parse(this.responseText);
			//gen
			let htmlNames = '<h2>Generated Names</h2>';
			htmlNames += '<ul class="list">';
			//print every name
			names.forEach(function(names) {
				htmlNames += `
				<li>${names.name}</li>
				`;
			});
			htmlNames += '</ul">'
			document.getElementById('resultado').innerHTML = htmlNames;
		}
	}
	//send xhr request
	xhr.send();
}