const currentDialect = { value: 'fusha' };
const texts = {
    ar: {
        title: "تعلّم اللغة العربية",
        letters: "الحروف",
        numbers: "الأرقام",
        words: "الكلمات الشائعة"
    },
    en: {
        title: "Learn Arabic",
        letters: "Letters",
        numbers: "Numbers",
        words: "Common Words"
    },
    fr: {
        title: "Apprenez l'Arabe",
        letters: "Lettres",
        numbers: "Nombres",
        words: "Mots courants"
    }
};

function changeLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.getElementById("title").innerText = texts[lang].title;
    document.getElementById("letters-title").innerText = texts[lang].letters;
    document.getElementById("numbers-title").innerText = texts[lang].numbers;
    document.getElementById("words-title").innerText = texts[lang].words;
}

function showSection(id) {
    document.querySelectorAll(".section").forEach(el => el.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function toggleDialect(dialect) {
    currentDialect.value = dialect;
}

// إنشاء الحروف
const letters = ['ا','ب','ت','ث','ج','ح','خ','د','ذ','ر'];
letters.forEach(letter => {
    const div = document.createElement("div");
    div.className = "letter";
    div.textContent = letter;
    div.setAttribute("data-letter", letter);
    div.setAttribute("data-sound", letter);
    div.addEventListener("mouseenter", () => playSound(`sounds/letters/${currentDialect.value}/${letter}.mp3`));
    document.querySelector(".letters-container").appendChild(div);
});

// إنشاء الأرقام
for (let i = 0; i <= 10; i++) {
    const div = document.createElement("div");
    div.className = "number";
    div.textContent = i;
    div.addEventListener("mouseenter", () => playSound(`sounds/numbers/${i}.mp3`));
    document.querySelector(".numbers-container").appendChild(div);
}

// إنشاء الكلمات
const words = ['مرحبا','شكرا','من فضلك','نعم','لا','اسمك','أنا','أنت','هو','هي'];
words.forEach(word => {
    const div = document.createElement("div");
    div.className = "word";
    div.textContent = word;
    div.addEventListener("mouseenter", () => playSound(`sounds/words/${word}.mp3`));
    document.querySelector(".words-container").appendChild(div);
});

// تشغيل الصوت
function playSound(src) {
    const audio = new Audio(src);
    audio.play();
}