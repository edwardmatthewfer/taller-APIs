fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const userList = document.getElementById('user-list');
        data.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name + ". Correo electrónico: " + user.email + ". Ciudad: " + user.address.city;
            userList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });