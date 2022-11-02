const url = "http://localhost:5500/api";

function getUsers() {
  fetch(url)
    .then(response =>response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(err => console.log(err))
}

getUsers();

function getUser(id) {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
      username.textContent = data.name;
      usercity.textContent = data.city;
      useravatar.src = data.avatar;
    })
    .catch(err => console.log(err));
}

getUser(10);

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.log(err))
}

function updateUser(updateUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updateUser),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.log(err))
}

const newUser = {
  name: "Robert Garcia",
  avatar: "http://picsum.photos/400/200",
  city: "Manaus"
}

addUser(newUser);

const modifyUser = {
  name: "Pedro Garcia",
  avatar: "http://picsum.photos/400/200",
  city: "São Francisco"
}

updateUser(modifyUser, 10);
