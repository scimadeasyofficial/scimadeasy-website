// Video filter functionality
// This script handles filtering videos by category on the SciMadEasy website

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const videoContainers = document.querySelectorAll('.video-container');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = btn.getAttribute('data-filter');
            videoContainers.forEach(vc => {
                if (filter === 'all' || vc.getAttribute('data-category') === filter) {
                    vc.style.display = '';
                } else {
                    vc.style.display = 'none';
                }
            });
            // Optional: highlight active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});
