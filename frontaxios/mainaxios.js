const url = "http://localhost:5500/api";
console.log("rodando");

function getUsers() {
  axios.get(url)
    .then(response => apiResult.textContent = JSON.stringify(response.data))
    .catch(err => console.error(err))
}

getUsers();
