document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('upload').addEventListener('click', () => {
        const uploadForm = document.createElement('form');
        uploadForm.action = '/upload';
        uploadForm.method = 'POST';
        uploadForm.enctype = 'multipart/form-data';
        uploadForm.innerHTML = `
            <input type="file" name="document" required>
            <button type="submit">Upload</button>
        `;
        document.body.appendChild(uploadForm);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".moving-image");

    images.forEach(image => {
        resetPosition(image);

        image.addEventListener("animationiteration", function() {
            resetPosition(image);
        });
    });

    function resetPosition(image) {
        const randomX = Math.floor(Math.random() * window.innerWidth) - 150;
        const randomY = Math.floor(Math.random() * window.innerHeight) - 150;
        const duration = Math.floor(Math.random() * 20) + 10;

        image.style.left = `${randomX}px`;
        image.style.top = `${randomY}px`;
        image.style.animationDuration = `${10}s`;
    }
});
