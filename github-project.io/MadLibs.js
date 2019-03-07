window.prompt('What is your name?');

window.alert("Welcome to the funniest Mad Lib story ever!");

function changeAnimal(){
    var newAnimal = window.prompt('What animal do you want to be?');
    document.getElementById('animal').innerText = newAnimal;
}
document.getElementById('changeAnimal').onclick = changeAnimal;

function changeAction(){
    var newAction = window.prompt('What action do you want to do?');
    var actionElements = document.querySelectorAll('#action');
    actionElements.forEach(function(element) {
        element.innerText = newAction;
    });
    // document.getElementById('action').innerText = newAction;
}
document.getElementById('changeAction').onclick = changeAction;

function changeJob(){
    var newJob = window.prompt("What is a job you don't want to do?");
   document.getElementById('job').innerText = newJob;
}
document.getElementById('changeJob').onclick = changeJob;

function changeNumber(){
    var newNumber = window.prompt("Number of years?");
    document.getElementById('number').innerText = newNumber;
}
document.getElementById('changeNumber').onclick = changeNumber;

function changeName(){
    var newName = window.prompt("New Name.");
    let nameElements = document.querySelectorAll('.name');
    for (let i = 0; i < nameElements.length; i++){
        nameElements[i].innerText = newName;
    }


    document.getElementById('name').innerText = newName;
}
document.getElementById('changeName').onclick = changeName;