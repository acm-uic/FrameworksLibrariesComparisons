var userListDiv;

var userList = [new User(1, "John", "Snow", "jsnow@acmuic.org"),new User(2, "Christian", "Bingman", "cbingm@acmuic.org")]

// Definitely not copied from Stack Overflow
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

window.onload = function () {
    userListDiv = document.getElementById("user-list");
    showUsers();
}

function addUser() {
    idVal = userList.length == 0 ? 0 : userList[userList.length-1].id + 1;
    fnameVal = document.getElementById('fname').value;
    lnameVal = document.getElementById('lname').value;
    emailVal = document.getElementById('email').value;
    userList.push(new User(idVal, fnameVal, lnameVal, emailVal))
    reloadUsers();
}

function searchUsers(){
    searchFieldVal = document.getElementById('search').value;
    console.log(searchFieldVal);
    newUserList = userList.filter(el => el.email.includes(searchFieldVal));
    console.log(newUserList);
    reloadUsers(newUserList);
}

function deleteById(id) {
    userList = userList.filter(el => el.id != id);
    reloadUsers(userList);
}

function reloadUsers(usersList) {
    document.getElementsByClassName('card').remove();
    showUsers(usersList);
}

function showUsers(usersList = userList) {
    usersList.forEach((el) => {
        newEl = createCard(el);
        userListDiv.appendChild(newEl);
    });
}

function User(id, fname, lname, email){
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
}

function createCard(user) {
    outerDiv = document.createElement('div');
    outerDiv.className = "card my-3";
    cardBody = document.createElement('div');
    cardBody.className = "card-body";
    outerDiv.appendChild(cardBody);
    cardTitle = document.createElement('h5');
    cardTitle.className = "card-title";
    cardTitle.textContent = user.fname + " " + user.lname;
    cardBody.appendChild(cardTitle);
    idField = document.createElement('p');
    idField.className = "card-text d-inline-block";
    idField.textContent = user.id;
    emailField = document.createElement('p');
    emailField.className = "card-text float-right";
    emailField.textContent = user.email;
    cardBody.appendChild(idField);
    cardBody.appendChild(emailField);
    cardFooter = document.createElement('div');
    cardFooter.className = "card-footer";
    floatButtons = document.createElement('div');
    floatButtons.className = "float-right";
    buttonDelete = document.createElement('button');
    buttonDelete.className = "btn btn-outline-danger";
    buttonDelete.textContent = "Delete";
    buttonDelete.onclick = () => {deleteById(user.id);}
    outerDiv.appendChild(cardFooter);
    cardFooter.appendChild(floatButtons);
    floatButtons.appendChild(buttonDelete);
    return outerDiv;
}