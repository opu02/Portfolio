var typed = new Typed('.text', {
    strings: ['Full Stack Developer', 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function toggleVideo() {
    const video = document.getElementById('myAboutVideo');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}