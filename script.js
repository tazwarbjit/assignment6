$(document).ready(() => {
    const users = [];
    const tableBody = $(".table-body");
    const userName = $("#name");
    const userEmail = $("#email");
    const userOrganization = $("#organization");
    const userSession = $("#session");

    function renderUsers() {
        tableBody.empty();
        users.forEach((user) => {
            const row = $("<tr>");
            row.html(`
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.organization}</td>
                <td>${user.session}</td>
            `);
            tableBody.append(row);
        });
    }

    function addUser(event) {
        event.preventDefault();
        $("#successModal").modal("show");

        const user = {
            name: userName.val(),
            email: userEmail.val(),
            organization: userOrganization.val(),
            session: userSession.val()
        };

        users.push(user);

        userName.val("");
        userEmail.val("");
        userOrganization.val("");
        userSession.val("");

        renderUsers();
    }

    $("#registration-form").submit((event) => {
        addUser(event);
    });

    $("#form").click(() => {
        $("#form").addClass("active");
        $("#sessions").removeClass("active");
        $("#members").removeClass("active");
        $('.registration').css("display", "block");
        $('.session').css("display", "none");
        $('.names').css("display", "none");
    });

    $("#sessions").click(() => {
        $("#sessions").addClass("active");
        $("#form").removeClass("active");
        $("#members").removeClass("active");
        $('.registration').css("display", "none");
        $('.session').css("display", "block");
        $('.names').css("display", "none");
    });

    $("#members").click(() => {
        $("#members").addClass("active");
        $("#sessions").removeClass("active");
        $("#form").removeClass("active");
        $('.registration').css("display", "none");
        $('.session').css("display", "none");
        $('.names').css("display", "block");
    });
});