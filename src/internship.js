/* 1. Get the elements from the page*/
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const sectorSelect = document.getElementById("sectorSelect");
const searchButton = document.getElementById("searchButton");
const productList = document.getElementById("product-list");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

/*2. Get all job cards*/
const products = productList.querySelectorAll(".product");

/*3. Function that shows or hides the cards*/
function filterProducts() {
    const keyword = searchInput.value.toLowerCase().trim();
    const category = categorySelect.value;
    const sector = sectorSelect.value;
    let visible = 0;

    for (let i = 0; i < products.length; i++) {
        const card = products[i];
        const title = card.querySelector("h3").textContent.toLowerCase();
        let company = "";
        const companyElement = card.querySelector(".company");
        if (companyElement) {
            company = companyElement.textContent.toLowerCase();
        }
        let matchKeyword = true;
        if (keyword !== "") {
            matchKeyword = title.includes(keyword) || company.includes(keyword);
        }
        let matchCategory = true;
        if (category !== "") {
            matchCategory = card.dataset.category === category;
        }
        let matchSector = true;
        if (sector !== "") {
            matchSector = card.dataset.sector === sector;
        }
        if (matchKeyword && matchCategory && matchSector) {
            card.classList.remove("hidden");
            visible = visible + 1;
        } else {
            card.classList.add("hidden");
        }
    }
    if (resultCount) {
        resultCount.textContent = visible + " internships found";
    }
    if (noResults) {
        if (visible === 0) {
            noResults.classList.remove("hidden");
        } else {
            noResults.classList.add("hidden");
        }
    }
}

/* 4. Run the function when the user does something*/
searchButton.addEventListener("click", filterProducts);
searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);
sectorSelect.addEventListener("change", filterProducts);

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        filterProducts();
    }
});