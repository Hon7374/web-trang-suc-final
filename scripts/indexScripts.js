
function setupSlider(id) {
    const slider = document.getElementById(id);
    const slides = slider.children;
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 5000);
}

setupSlider('slider');
setupSlider('slider2');
