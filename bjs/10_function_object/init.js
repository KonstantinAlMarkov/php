var person;

function createPerson(){
    return personGenerator.getPerson();
}

function updateFormFields(personData){
    document.getElementById('firstNameOutput').innerText = personData.firstName;
    document.getElementById('surnameOutput').innerText = personData.surName;
    document.getElementById('genderOutput').innerText = personData.gender.gender;
    document.getElementById('birthDayOutput').innerText = personData.dayBith;
    document.getElementById('birthMonthOutput').innerText = personData.monthBith;    
    document.getElementById('birthYearOutput').innerText = personData.age;
    document.getElementById('midNameOutput').innerText = personData.midName;
    document.getElementById('profession').innerText = personData.profession;
}

function resetFormFields(personData){
    document.getElementById('firstNameOutput').innerText = personData.firstName;
    document.getElementById('surnameOutput').innerText = personData.surName;
    document.getElementById('genderOutput').innerText = personData.gender.gender;
    document.getElementById('birthDayOutput').innerText = personData.dayBith;
    document.getElementById('birthMonthOutput').innerText = personData.monthBith;    
    document.getElementById('birthYearOutput').innerText = personData.age;
    document.getElementById('midNameOutput').innerText = personData.midName;
    document.getElementById('profession').innerText = personData.profession;
}

/*
window.onload = function()
{
    person = createPerson();
    updateFormFields(person);
}; */

document.getElementById('reset').addEventListener('click', function () {
    location.reload();
})

document.getElementById('nextName').addEventListener('click', function () {
    document.getElementById('formHead').innerHTML="Окно результатов генерации";
    person = createPerson();
    updateFormFields(person);
})

