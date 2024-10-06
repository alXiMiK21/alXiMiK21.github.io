document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    const emailInput = document.getElementById("email");

    forgotPasswordLink.addEventListener("click", (event) => {
        event.preventDefault(); 

        const email = emailInput.value.trim();

        if (email) {

            window.location.href = `/forgot-password?email=${encodeURIComponent(email)}`;
        } else {

            alert("Пожалуйста, введите почту для восстановления пароля.");
        }
    });
});
