document.addEventListener("DOMContentLoaded", function() {
    // Összegyűjti az összes ikon elemet
    const icons = document.querySelectorAll(".icon");

    // Eseménykezelő hozzárendelése minden ikonhoz
    icons.forEach(icon => {
        icon.addEventListener("click", function(event) {
            event.preventDefault(); // Megakadályozza az alapértelmezett linkműveletet
            const pageUrl = icon.getAttribute("data-page"); // Az oldal URL-jét az attribútumból nyeri ki
            if (pageUrl) {
                window.open(pageUrl, "_blank"); // Új lapon nyitja meg az oldalt
            }
        });
    });
});
