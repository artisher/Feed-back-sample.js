function add () {
const name = document.getElementById('name').value;
const phone = document.getElementById('phone').value;
const age = document.getElementById('age').value;
const when = document.getElementById('when').value;
const table = document.getElementById('infotable').getElementsByTagName('tbody')[0];
const newRow = table.insertRow();
newRow.insertCell(0).textContent = name;
newRow.insertCell(1).textContent = phone;
newRow.insertCell(2).textContent = age;
newRow.insertCell(3).textContent = when;
}
function start (){
    var number = document.getElementById("phone").value;
    alert (number+"is entering List ")
}
function checkAge (){
    var checkAge = document.getElementById('age').value;
    checkAge++;
    alert ("you need to be at least " + checkAge)
}

