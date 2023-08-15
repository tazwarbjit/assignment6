// import { addUser } from "script.js";

// model popup registration confirmation
$(document).ready(() => {
    $("#registration-form").submit((event) => {
        event.preventDefault();
        $("#successModal").modal("show");
    });
});

// document.querySelector('.btn-custom').addEventListener('click', addUser);