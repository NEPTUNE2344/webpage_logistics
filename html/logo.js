document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const logoOverlay = document.querySelector(".logo-overlay");
        logoOverlay.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrollbars
    }, 5000); // Adjust the delay to match the desired display time
});
