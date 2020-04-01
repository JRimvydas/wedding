const table = document.querySelector(".content tbody");

document.forms.registration.addEventListener("submit", e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const surname = e.target.elements.surname.value;
    const name2 = e.target.elements.name2.value;
    const surname2 = e.target.elements.surname2.value;
    if(name !== "" && surname != ""){
    const tr = table.insertRow(-1);
    const td1 = tr.insertCell(-1);
    const td2 = tr.insertCell(-1);
    td1.textContent = name;
    td2.textContent = surname;
    }
    else{
        alert("Įveskite vardą ir pavardę!")
    }
    
    if(name2 !=="" && surname2 !== ""){
    const tr = table.insertRow(-1);
    const td1 = tr.insertCell(-1);
    const td2 = tr.insertCell(-1);
    td1.textContent = name2;
    td2.textContent = surname2;
    }
    
});