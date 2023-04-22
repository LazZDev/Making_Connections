function changeName() {
    const nameElem = document.getElementById("name");
    nameElem.innerText = "Mary Jane";
}

function removeUser(userId) {
    var userDiv = document.getElementById(userId);
    if (userDiv) userDiv.parentNode.removeChild(userDiv);
}
