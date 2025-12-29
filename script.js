// Interactive Navigation with Smooth Transitions

document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links and sections
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Function to switch sections
    function switchSection(targetSectionId) {
        // Remove active class from all sections and nav links
        sections.forEach(section => section.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));

        // Add active class to target section and corresponding nav link
        const targetSection = document.getElementById(targetSectionId);
        const targetNavLink = document.querySelector(`[data-section="${targetSectionId}"]`);

        if (targetSection && targetNavLink) {
            targetSection.classList.add('active');
            targetNavLink.classList.add('active');

            // Smooth scroll to top of main content
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            switchSection(targetSection);
        });
    });

    // Optional: Handle URL hash navigation
    function handleHashChange() {
        const hash = window.location.hash.substring(1); // Remove the '#'
        if (hash) {
            switchSection(hash);
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Check for initial hash on page load
    handleHashChange();
});
