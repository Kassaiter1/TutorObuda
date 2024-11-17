document.addEventListener("DOMContentLoaded", function() {

    const icons = document.querySelectorAll(".icon");

    icons.forEach(icon => {
        icon.addEventListener("click", function(event) {
            event.preventDefault(); 
            const pageUrl = icon.getAttribute("href"); 
            if (pageUrl) {
                window.open(pageUrl, "_blank"); 
            }
        });
    });
});
function toggleForum() {
    const forumPanel = document.getElementById("forumPanel");
    forumPanel.classList.toggle("open"); 
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
