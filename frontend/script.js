const API_URL = "/users";


// =========================
// GET ALL USERS
// =========================
function getUsers() {

    fetch(API_URL)
        .then(response => response.json())
        .then(users => {

            const tableBody = document.getElementById("userTableBody");

            tableBody.innerHTML = "";

            users.forEach(user => {

                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>

                    <td>
                        <button class="edit-btn"
                            onclick="editUser(${user.id}, '${user.username}', '${user.email}')">
                            Edit
                        </button>

                        <button class="delete-btn"
                            onclick="deleteUser(${user.id})">
                            Delete
                        </button>
                    </td>
                `;

                tableBody.appendChild(row);
            });

        })
        .catch(error => {
            console.error("Error:", error);
        });
}


// =========================
// ADD USER
// =========================
function addUser() {

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (username === "" || email === "") {
        alert("Please enter username and email");
        return;
    }

    fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username: username,
            email: email
        })

    })
    .then(response => response.json())
    .then(data => {

        alert(data.message);

        document.getElementById("username").value = "";
        document.getElementById("email").value = "";

        getUsers();

    })
    .catch(error => {
        console.error("Error:", error);
    });
}


// =========================
// DELETE USER
// =========================
function deleteUser(id) {

    if (!confirm("Are you sure you want to delete this user?")) {
        return;
    }

    fetch(`${API_URL}/${id}`, {

        method: "DELETE"

    })
    .then(response => response.json())
    .then(data => {

        alert(data.message);

        getUsers();

    })
    .catch(error => {
        console.error("Error:", error);
    });
}


// =========================
// EDIT USER
// =========================
function editUser(id, oldUsername, oldEmail) {

    const username = prompt("Enter new username:", oldUsername);

    if (username === null) {
        return;
    }

    const email = prompt("Enter new email:", oldEmail);

    if (email === null) {
        return;
    }

    fetch(`${API_URL}/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username: username,
            email: email
        })

    })
    .then(response => response.json())
    .then(data => {

        alert(data.message);

        getUsers();

    })
    .catch(error => {
        console.error("Error:", error);
    });
}


// =========================
// LOAD USERS WHEN PAGE OPENS
// =========================
getUsers();