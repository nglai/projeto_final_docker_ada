let nome = document.getElementById('name')
let email = document.getElementById('email')
let tbody = document.querySelector('table tbody')


var form = document.getElementById("form")

form.addEventListener('submit', function(e){
    e.preventDefault()
    fetch("http://localhost:3000/users",
        {
            method: "POST",
            body: JSON.stringify({
                name: nome.value,
                email: email.value,
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
    .then(response => response.json)
    .catch(error => console.log(error))
})

async function mostrar () {
    const response = await fetch("http://localhost:3000/users")
    const data = await response.json();
    tbody.innerHTML = ""
    console.log(data.users)
    data.users.map((item) => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
          <td>${item.name}</td>
          <td>${item.email}</td>
        `
        tbody.appendChild(tr)
    })
}
mostrar()