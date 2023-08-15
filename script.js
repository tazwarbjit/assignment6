const users = [];

const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userOrganization = document.getElementById('organization');
const userSession = document.getElementById('session');

const tableBody = document.querySelector("tbody");

function renderUsers() {
    tableBody.innerHTML = "";
    users.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.userName}</td>
            <td>${user.userEmail}</td>
            <td>${user.userOrganization}</td>
            <td>${user.userSession}</td>
            `;
        tableBody.appendChild(row);
    });
}

export function addUser() {
    const user = {
        name: userName.value,
        email: userEmail.value,
        organization: userOrganization.value,
        session: userSession.value
    };

    users.push(user);

    userName.value = "";
    userEmail.value = "";
    userOrganization.value = "";
    userSession.value = "";

    renderUsers();
}