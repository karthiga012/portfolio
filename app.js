// Select all the links and sections
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

// Track the active link
let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        
        // Remove 'active' class from the previously active link and section
        links[activeLink].classList.remove('active');
        sections[activeLink].classList.remove('active');
        
        // Add 'active' class to the clicked link and its corresponding section
        link.classList.add('active');
        sections[i].classList.add('active');

        // Hide all sections except the active one
        sections.forEach((section, index) => {
            if (index !== i) {
                section.style.display = 'none'; // Hide non-active sections
            } else {
                section.style.display = 'block'; // Show active section
            }
        });

        // Update the active link index
        activeLink = i;
    });
});
