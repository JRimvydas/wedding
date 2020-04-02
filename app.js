
let NumberOfAtendees;

if(localStorage.getItem("i") === null){
    localStorage.setItem("i",0);
    NumberOfAtendees = 0;
}
else{
    NumberOfAtendees = localStorage.getItem("i");
}

document.forms.registration.addEventListener("submit", e => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const surname = e.target.elements.surname.value.trim();

    const name2 = e.target.elements.name2.value.trim();
    const surname2 = e.target.elements.surname2.value.trim();

    if (name2 !== "" && surname2 !== "" && name !== "" && surname !== "") {
        addPerson(name, surname);
        addPerson(name2, surname2);
    } else if (name !== "" && surname !== "") {
        addPerson(name, surname);
    } else {
        const errorMessage = document.querySelector(".notification");
        errorMessage.textContent = "Įrašykite savo Vardą ir Pavardę";
        errorMessage.style.display = "block"
    } 
});
document.querySelector(".notification").addEventListener("click", () => (document.querySelector(".notification").style.display = "none"));

    function addPerson(name, surname) {
        localStorage.setItem(NumberOfAtendees, `${name}-${surname}`);
        NumberOfAtendees++;
        localStorage.setItem("i", NumberOfAtendees);
    }