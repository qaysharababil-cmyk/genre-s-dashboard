// ===============================
// GENRE DASHBOARD
// ===============================
// SCROLL
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}
// ===============================
// MODAL
// ===============================
function openModal(title, description) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDescription").textContent =
        description;
    document.getElementById("modal").style.display = "flex";
    saveProgress(title);
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
// Klik di luar modal
window.addEventListener("click", function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
});
// ESC untuk menutup modal
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
// ===============================
// PROGRESS BELAJAR
// ===============================
let learned = JSON.parse(
    localStorage.getItem("genreProgress")
) || [];
const totalMateri = 7;
function saveProgress(title) {
    if (!learned.includes(title)) {
        learned.push(title);
        localStorage.setItem(
            "genreProgress",
            JSON.stringify(learned)
        );
    }
    updateProgress();
}
function updateProgress() {
    let percentage =
        Math.round((learned.length / totalMateri) * 100);
    if (percentage > 100) {
        percentage = 100;
    }
    document.getElementById("progressBar").style.width =
        percentage + "%";
    document.getElementById("progressText").textContent =
        percentage + "%";
    if (percentage === 0) {
        document.getElementById("progressTitle").textContent =
            "Mulai perjalananmu";
    } else if (percentage < 50) {
        document.getElementById("progressTitle").textContent =
            "Kamu sudah mulai! 🌱";
    } else if (percentage < 100) {
        document.getElementById("progressTitle").textContent =
            "Perjalananmu semakin jauh! 🚀";
    } else {
        document.getElementById("progressTitle").textContent =
            "Semua materi selesai! 🎉";
    }
}
// ===============================
// MOBILE MENU
// ===============================
function toggleMenu() {
    const nav = document.querySelector(".navbar nav");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.position = "absolute";
        nav.style.top = "70px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.padding = "20px";
        nav.style.flexDirection = "column";
        nav.style.background = "#f8f6ef";
        nav.style.borderBottom =
            "1px solid #e5e7eb";
    }
}
// ===============================
// LOAD
// ===============================
window.addEventListener("DOMContentLoaded", function() {
    updateProgress();
});
