let NumberOfAtendees;

if (localStorage.getItem("i") === null) {
    localStorage.setItem("i", 0);
    NumberOfAtendees = 0;
}
else {
    NumberOfAtendees = localStorage.getItem("i");
    getNames();
}
function getNames() {
    for (let a = 0; a < NumberOfAtendees; a++) {
        let fullName = localStorage.getItem(a);
        fullName = fullName.split("-");
        displayPerson(fullName[0], fullName[1]);
    }
}

function displayPerson(name, surname) {
    const table = document.querySelector(".content tbody");

    const tr = table.insertRow(-1);
    const td1 = tr.insertCell(-1);
    const td2 = tr.insertCell(-1);

    td1.textContent = name;
    td2.textContent = surname;
}