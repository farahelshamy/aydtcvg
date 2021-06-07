var getUserName = prompt("Hello! My Name is Farah")

console.log(getUserName);

document.getElementById("userName").innerText = getUserName
//tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })