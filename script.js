
     // JavaScript for drag-to-scroll functionality
        const carousel = document.getElementById('carouselContainer');
        let isDragging = false;
        let startX, scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDragging = true;
            carousel.classList.add('active');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDragging = false;
            carousel.classList.remove('active');
        });

        carousel.addEventListener('mouseup', () => {
            isDragging = false;
            carousel.classList.remove('active');
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2; // Adjust scroll speed
            carousel.scrollLeft = scrollLeft - walk;
        });

        const customArea = document.getElementById('customArea');
        const customCursor = document.getElementById('customCursor');

        // Show cursor when entering the div
        customArea.addEventListener('mouseenter', () => {
            customCursor.style.display = 'block';
        });

        // Hide cursor when leaving the div
        customArea.addEventListener('mouseleave', () => {
            customCursor.style.display = 'none';
        });

        // Move the custom cursor and text inside the div
        customArea.addEventListener('mousemove', (e) => {
            const rect = customArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Ensure the custom cursor starts working only after 100px from the top
            if (y > 100) {
                customCursor.style.left = x + 'px';
                customCursor.style.top = y + 'px';
                customCursor.style.display = 'block';
                customArea.style.cursor = 'none'; // Hide default cursor
            } else {
                customCursor.style.display = 'none';
                customArea.style.cursor = 'default'; // Show default cursor
            }
        });

        // Position the custom cursor at the center on page load
        document.addEventListener('DOMContentLoaded', () => {
            const rect = customArea.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            customCursor.style.left = centerX + 'px';
            customCursor.style.top = centerY + 'px';
            customCursor.style.display = 'block'; // Ensure the cursor is visible
        });

        let lastScrollTop = 0;
        const header = document.querySelector('header');
        const headerLinks = document.querySelectorAll('header a'); // Select all links in the header
        const topBar = document.querySelector('.top-bar'); // Select the top-bar

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Hide header on scroll down, show on scroll up
            if (scrollTop > lastScrollTop) {
                header.style.top = '-100px'; // Hide header
            } else {
                header.style.top = '0'; // Show header
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll

            // Change header, top-bar, and text color based on background
            const backgroundDiv = document.getElementById('backgroundDiv');
            const rect = backgroundDiv.getBoundingClientRect();
            if (rect.bottom <= 0) {
                header.style.backgroundColor = 'white';
                header.style.color = 'black';
                topBar.style.color = 'black'; // Change top-bar text color
                headerLinks.forEach(link => link.style.color = 'black'); // Change link text color
            } else {
                header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                header.style.color = 'white';
                topBar.style.color = 'white'; // Change top-bar text color
                headerLinks.forEach(link => link.style.color = 'white'); // Change link text color
            }
        });
