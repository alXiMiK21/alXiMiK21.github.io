document.addEventListener("DOMContentLoaded", () => {
    const resetForm = document.getElementById("resetForm");
    const notification = document.getElementById("notification");

    resetForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting immediately

        // Simulate email notification (Here, you would handle the actual password reset logic)
        notification.classList.remove("hidden");

        // Optionally, you can redirect the user after a few seconds
        setTimeout(() => {
            window.location.href = "/login";
        }, 3000); // Redirects to the login page after 3 seconds
    });
});
