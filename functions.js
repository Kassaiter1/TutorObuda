document.addEventListener("DOMContentLoaded", function() {
    // Összegyűjti az összes ikon elemet
    const icons = document.querySelectorAll(".icon");

    // Eseménykezelő hozzárendelése minden ikonhoz
    icons.forEach(icon => {
        icon.addEventListener("click", function(event) {
            event.preventDefault(); // Megakadályozza az alapértelmezett linkműveletet
            const pageUrl = icon.getAttribute("href"); // Az oldal URL-jét az href attribútumból nyeri ki
            if (pageUrl) {
                window.open(pageUrl, "_blank"); // Új lapon nyitja meg az oldalt
            }
        });
    });
});
function toggleForum() {
    const forumPanel = document.getElementById("forumPanel");
    forumPanel.classList.toggle("open"); // Fórum panel nyitása és zárása
}

function submitQuestion() {
    const name = document.getElementById("nameInput").value;
    const question = document.getElementById("questionInput").value;

    if (name && question) {
        console.log(`Név: ${name}`);
        console.log(`Kérdés: ${question}`);
        alert("A kérdésed elküldtük!");
        document.getElementById("nameInput").value = '';
        document.getElementById("questionInput").value = '';
    } else {
        alert("Kérlek, add meg a neved és a kérdésed!");
    }
}
