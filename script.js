// Initialize any global functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for authentication status
    checkAuthStatus();
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

function checkAuthStatus() {
    // This would check if user is logged in
    // For demo purposes, we'll just check localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        document.querySelectorAll('.auth-only').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.guest-only').forEach(el => el.style.display = 'none');
    } else {
        document.querySelectorAll('.auth-only').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.guest-only').forEach(el => el.style.display = 'block');
    }
}

// Sample function to handle login
function handleLogin() {
    localStorage.setItem('isLoggedIn', 'true');
    checkAuthStatus();
    window.location.href = 'dashboard.html';
}

// Sample function to handle logout
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    checkAuthStatus();
    window.location.href = 'index.html';
}