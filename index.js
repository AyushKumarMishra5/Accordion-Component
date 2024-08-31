const accordionHeaders = document.querySelectorAll('.header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
                otherHeader.nextElementSibling.style.display = "none";
            }
        });
    });
});
