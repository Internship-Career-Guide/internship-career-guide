var totalQuestions = 5;

var results = {
    tech: { icon: "💻", title: "Web & IT", text: "You like computers and solving problems. Look for web, software, and IT internships." },
    design: { icon: "🎨", title: "Design & Creative", text: "You are creative. Look for design, graphics, and UI/UX internships." },
    business: { icon: "📊", title: "Business & Management", text: "You like plans and teamwork. Look for business, admin, and project internships." },
    marketing: { icon: "📣", title: "Marketing & Communication", text: "You like talking and writing. Look for marketing, media, and social media internships." }
};

var answers = {};
var options = document.querySelectorAll(".quiz-option");

function updateProgress() {
    var done = Object.keys(answers).length;
    document.getElementById("progressText").innerText = done + " of " + totalQuestions + " answered";
    document.getElementById("progressBar").style.width = (done / totalQuestions * 100) + "%";
}

function clearButtons(list) {
    for (var j = 0; j < list.length; j++) {
        list[j].classList.remove("bg-blue-600", "text-white", "border-blue-600");
        list[j].classList.add("bg-white", "text-blue-900", "border-slate-200");
    }
}

for (var i = 0; i < options.length; i++) {
    options[i].onclick = function () {
        var q = this.getAttribute("data-q");
        answers[q] = this.getAttribute("data-cat");

        clearButtons(document.querySelectorAll('.quiz-option[data-q="' + q + '"]'));

        this.classList.remove("bg-white", "text-blue-900", "border-slate-200");
        this.classList.add("bg-blue-600", "text-white", "border-blue-600");

        updateProgress();
    };
}

document.getElementById("quizBtn").onclick = function () {
    var error = document.getElementById("quizError");
    var result = document.getElementById("quizResult");

    for (var q = 1; q <= totalQuestions; q++) {
        if (!answers[q]) {
            error.classList.remove("hidden");
            result.classList.add("hidden");
            return;
        }
    }
    error.classList.add("hidden");

    // count points
    var score = { tech: 0, design: 0, business: 0, marketing: 0 };
    for (var n = 1; n <= totalQuestions; n++) {
        score[answers[n]]++;
    }

    // best field (the first answer wins if there is a tie)
    var best = answers[1];
    for (var field in score) {
        if (score[field] > score[best]) {
            best = field;
        }
    }

    document.getElementById("resultIcon").innerText = results[best].icon;
    document.getElementById("resultTitle").innerText = results[best].title;
    document.getElementById("resultText").innerText = results[best].text;

    // score bars
    var bars = "";
    for (var f in results) {
        var percent = score[f] / totalQuestions * 100;
        bars += '<div class="mb-3"><div class="flex justify-between text-sm mb-1"><span>' + results[f].title + '</span><span>' + score[f] + '/' + totalQuestions + '</span></div>' +
            '<div class="w-full bg-blue-800 rounded-full h-2"><div class="bg-blue-300 h-2 rounded-full" style="width:' + percent + '%"></div></div></div>';
    }
    document.getElementById("resultBars").innerHTML = bars;

    result.classList.remove("hidden");
    result.scrollIntoView({ behavior: "smooth", block: "center" });
};

document.getElementById("quizReset").onclick = function () {
    answers = {};
    clearButtons(options);
    updateProgress();
    document.getElementById("quizResult").classList.add("hidden");
    document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
};