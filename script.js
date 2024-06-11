function startProgress() {
    let progressBar = document.getElementById('progress-bar');
    let width = 0;

    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width = 80;
            // width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width + '%';
        }
    }, 100);
}