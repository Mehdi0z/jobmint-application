document.addEventListener('DOMContentLoaded', function(){
    const videoContainers = document.querySelectorAll('.is_video_banner')

    if (!videoContainers.length) {
        return;
    }

    videoContainers.forEach(container => {
        const banner = container.querySelector('.banner__media');
        const video = banner.querySelector('video');
        const { mobileVideoUrl } = banner.dataset;
        let videoSrc = '';

        if (window.innerWidth > 749) {
            videoSrc = video.querySelector('source').dataset.src;
        } else {
            videoSrc = mobileVideoUrl;
        }

        video.querySelector('source').setAttribute('src', videoSrc);
        video.load();
    });

})