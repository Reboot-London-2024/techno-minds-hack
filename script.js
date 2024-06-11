function startProgress() {
    let progressBar = document.getElementById('progress-bar');
    let width = 0;

    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width + '%';
        }
    }, 100);
}