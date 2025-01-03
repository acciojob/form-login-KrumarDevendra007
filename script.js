
const btn = document.getElementById("btn");

btn.addEventListener("click", getFormvalue);


function getFormvalue() {

	const firstName = document.getElementById("fname").value;
    const lastname = document.getElementById("lname").value;

    
	alert(`${firstName} ${lastname}`);

}


