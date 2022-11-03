const url = "http://localhost:5500/api";
console.log("rodando");

function getUsers() {
  axios.get(url)
    .then(response => apiResult.textContent = JSON.stringify(response.data))
    .catch(err => console.error(err))
}

function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(response =>  response.data)
    .then(data => {
      userId.textContent = data.id;
      username.textContent = data.name;
      usercity.textContent = data.city;
      useravatar.src = data.avatar;
    })
}

function addNewUser(newUser) {
  axios.post(url, {
    name: newUser.name,
    avatar: newUser.avatar,
    city: newUser.city
  })
    .then(response => response.data)
    .then(data => alertApi.textContent = data)
    .catch(err => console.error(err))
}

const newUser = {
  name: "Robert Garcia",
  avatar: "http://picsum.photos/400/200",
  city: "London"
}

getUsers();

getUser(3);

addNewUser(newUser);
