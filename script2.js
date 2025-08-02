document.addEventListener("DOMContentLoaded", () => {
    // Sidebar Nav Script for mobile
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    // Only run if sidebar components exist
    if (hamburger && sidebar && overlay) {
        hamburger.addEventListener("click", () => {
            sidebar.classList.toggle("open");
            overlay.classList.toggle("active");
            hamburger.classList.toggle("open");
            document.body.classList.toggle("sidebar-open");
        });

        overlay.addEventListener("click", () => {
            sidebar.classList.remove("open");
            overlay.classList.remove("active");
            hamburger.classList.remove("open");
            document.body.classList.remove("sidebar-open");
        });

        // Function for closing sidebar when a nav link is clicked
        window.sidebarNavClose = function sidebarNavClose() {
            sidebar.classList.remove("open");
            overlay.classList.remove("active");
            hamburger.classList.remove("open");
            document.body.classList.remove("sidebar-open");
        };
    }
});

// Highlight active nav button based on current page

document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname.split('/').pop(); // Gets 'home.html', 'aboutus.html', etc.
    const navButtons = document.querySelectorAll('.nav-btn'); // Selects all desktop and mobile nav buttons

    navButtons.forEach(button => {
        // Remove existing active classes first (important for mobile sidebar if it's open)
        button.classList.remove('active');

        // Check if the button's href matches the current page
        if (button.getAttribute('href') === currentPath) {
            button.classList.add('active');
        }
    });
});




