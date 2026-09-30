/*3. GET INTERNSHIP INFORMATION*/
const savedPosition = localStorage.getItem("position");
const savedCompany = localStorage.getItem("company");
if (savedPosition) {
    document.getElementById("position").textContent = savedPosition;
}
if (savedCompany) {
    document.getElementById("company").textContent = savedCompany;
}
/* 3. SHOW CV FILE NAME */
const cvFile = document.getElementById("cvFile");
const fileName = document.getElementById("fileName");
cvFile.addEventListener("change", function () {
    if (cvFile.files.length > 0) {
        fileName.textContent = cvFile.files[0].name;
    } else {
        fileName.textContent = "No file chosen";
    }
});
/* 4. GO BACK BUTTON*/
const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", function () {
    window.location.href = "internship.html";
});

/* 5. FORM SUBMIT*/
const applyForm = document.getElementById("applyForm");
applyForm.addEventListener("submit", function (event) {
    event.preventDefault();
    /* Get form values */
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const education = document.getElementById("education").value.trim();
    if (
        fullName === "" ||
        email === "" ||
        phone === "" ||
        education === ""
    ) {
        alert("Please fill in all required fields.");
        return;
    }
    /* Save applicant name */
    localStorage.setItem(
        "applicantName", fullName
    );
    document.getElementById("successName")
        .textContent = fullName;
    document.getElementById("successPosition")
        .textContent = savedPosition || "Internship Position";
    document.getElementById("formContent").classList.add("hidden");
    document.getElementById("successMessage").classList.remove("hidden");
});
/*6. SUCCESS BACK BUTTON*/
const successBackBtn = document.getElementById("successBackBtn");
successBackBtn.addEventListener("click", function () {
    window.location.href = "internship.html";

});