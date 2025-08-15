const userList = document.getElementById("userList");
const errorMessage = document.getElementById("errorMessage");
const reloadBtn = document.getElementById("reloadBtn");

async function fetchUsers() {
    userList.innerHTML = "";
    errorMessage.textContent = "";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const users = await response.json();

        users.forEach(user => {
            const card = document.createElement("div");
            card.classList.add("user-card");
            card.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            `;
            userList.appendChild(card);
        });

    } catch (error) {
        errorMessage.textContent = `❌ Failed to load data: ${error.message}`;
    }
}

// Load data on page load
fetchUsers();

// Reload button event
reloadBtn.addEventListener("click", fetchUsers);