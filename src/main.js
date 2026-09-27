/*1.Subscription*/
const subscribeBtn = document.getElementById("subscribeBtn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");
subscribeBtn.addEventListener("click", function () {
    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    // Check empty input
    if (name === "" || email === "") {
        errorMessage.textContent = "Please enter your name and email.";
        errorMessage.classList.remove("hidden");
        successMessage.classList.add("hidden");
        return;
    }
    // Check email
    if (!email.includes("@")) {
        errorMessage.textContent = "Please enter a valid email.";
        errorMessage.classList.remove("hidden");
        successMessage.classList.add("hidden");
        return;
    }
    // Success
    errorMessage.classList.add("hidden");
    successMessage.classList.remove("hidden");
    // Clear input
    nameInput.value = "";
    emailInput.value = "";
});