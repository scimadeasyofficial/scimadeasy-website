document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const showLessBtn = document.getElementById('show-less-btn');
    const allHiddenVideos = document.querySelectorAll('.hidden-video');
    let videosShown = 0;
    const videosPerLoad = 3;

    // Check if there are hidden videos to show the button
    if (allHiddenVideos.length === 0) {
        loadMoreBtn.style.display = 'none';
    }

    loadMoreBtn.addEventListener('click', function() {
        // Show next batch of videos
        for (let i = videosShown; i < Math.min(videosShown + videosPerLoad, allHiddenVideos.length); i++) {
            allHiddenVideos[i].style.display = 'block';
            allHiddenVideos[i].classList.remove('hidden-video');
        }
        
        videosShown += videosPerLoad;
        
        // Show the "Show Less" button after loading more videos
        showLessBtn.style.display = 'inline-block';
        
        // Hide load more button if all videos are shown
        if (videosShown >= allHiddenVideos.length) {
            loadMoreBtn.style.display = 'none';
        }
        
        // Add smooth scroll animation to newly revealed videos
        setTimeout(() => {
            const lastShownVideo = allHiddenVideos[Math.min(videosShown - 1, allHiddenVideos.length - 1)];
            if (lastShownVideo) {
                lastShownVideo.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        }, 100);
    });

    showLessBtn.addEventListener('click', function() {
        // Hide all additional videos (keep original 3 visible)
        allHiddenVideos.forEach(video => {
            video.style.display = 'none';
            video.classList.add('hidden-video');
        });
        
        // Reset counters and button states
        videosShown = 0;
        loadMoreBtn.style.display = 'inline-block';
        showLessBtn.style.display = 'none';
        
        // Smooth scroll back to the video section
        document.getElementById('video-grid').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    });
});