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

getUser(1);
