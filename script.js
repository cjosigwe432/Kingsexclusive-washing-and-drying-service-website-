// LOGIN SYSTEM (Local Storage)
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user && pass) {
        localStorage.setItem("user", user);
        document.getElementById("loginPage").style.display = "none";
        showSection("dashboard");
        loadChart();
    } else {
        alert("Enter details");
    }
}

// AUTO LOGIN
window.onload = function () {
    if (localStorage.getItem("user")) {
        document.getElementById("loginPage").style.display = "none";
        showSection("dashboard");
        loadChart();
    }
};

// NAVIGATION
function showSection(id) {
    document.querySelectorAll(".content").forEach(sec => {
        sec.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
}

// LOGOUT
function logout() {
    localStorage.removeItem("user");
    location.reload();
}

// DARK MODE
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// SEARCH FUNCTION
function searchCustomer() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#customerTable tr");

    rows.forEach((row, index) => {
        if (index === 0) return;
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
}

// CHART
function loadChart() {
    let ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [{
                label: 'Revenue',
                data: [1200, 1900, 3000, 2500]
            }]
        }
    });
}