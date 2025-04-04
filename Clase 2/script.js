async function getUsers() {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    return data.data;
}

function showUsers(users) {
    const container = document.getElementById('users');
    container.innerHTML = '';
    
    users.forEach(user => {
        const div = document.createElement('div');
        div.className = 'user';
        div.innerHTML = `
            <strong>${user.first_name} ${user.last_name}</strong>
            <p>${user.email}</p>
            <img src="${user.avatar}" width="50">
        `;
        container.appendChild(div);
    });
}

function filterUsers(users, searchTerm) {
    return users.filter(user => 
        user.first_name.toLowerCase().includes(searchTerm) ||
        user.last_name.toLowerCase().includes(searchTerm)
    );
}

async function loadPage() {
    const allUsers = await getUsers();
    showUsers(allUsers);
    
    document.getElementById('search').addEventListener('input', (e) => {
        const filtered = filterUsers(allUsers, e.target.value.toLowerCase());
        showUsers(filtered);
    });
}

loadPage();