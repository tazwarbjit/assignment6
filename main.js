// import users from 'script.js';

// const userName = document.getElementById('name');
// const userEmail = document.getElementById('email');
// const userOrganization = document.getElementById('organization');
// const userSession = document.getElementById('session');

// users = 

$(document).ready(() => {
    $("#registration-form").submit((event) => {
    event.preventDefault();
    $("#successModal").modal("show");
    });
});