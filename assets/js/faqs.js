const faqTitle = document.querySelectorAll(".bg-gray-100 button");
faqTitle.forEach((button) => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector("span");

        // Toggle the max-height of the content
        if (content.style.maxHeight) {
            content.style.maxHeight = null; // Collapse
            icon.textContent = "+";
        } else {
            content.style.maxHeight = content.scrollHeight + "px"; // Expand
            icon.textContent = "-";
        }

        // Rotate the icon
        icon.classList.toggle("rotate-180");

        button.classList.toggle("text-primary");
    });
});
