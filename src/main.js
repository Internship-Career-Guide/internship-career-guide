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

/*2.SEARCH MENU*/
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
/*3.FAQ*/
function toggleFAQ(button) {
    const wrapper = button.parentElement
    const answer = wrapper.querySelector('.faq-answer')
    const icon = button.querySelector('i')
    answer.classList.toggle('hidden')
    if (answer.classList.contains('hidden')) {
        icon.classList.remove('fa-minus')
        icon.classList.add('fa-plus')
    } else {
        icon.classList.remove('fa-plus')
        icon.classList.add('fa-minus')
    }
}
/*7.Search filter*/
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const sectorSelect = document.getElementById("sectorSelect");
const searchButton = document.getElementById("searchButton");
const productList = document.getElementById("product-list");

console.log("searchInput:", searchInput);
console.log("categorySelect:", categorySelect);
console.log("sectorSelect:", sectorSelect);
console.log("searchButton:", searchButton);
console.log("productList:", productList);

const products = productList.querySelectorAll(".product");

console.log("Number of cards:", products.length);

products.forEach(function (product) {
    console.log(
        "Card:",
        product.querySelector("h3")?.textContent,
        "Category:",
        product.dataset.category,
        "Sector:",
        product.dataset.sector
    );
});

