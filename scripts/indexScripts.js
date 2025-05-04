function setupSlider(id) {
    const slider = document.getElementById(id);
    const slides = slider.children;
    let currentIndex = 0;

    // Đặt chiều rộng cho .slider theo số ảnh
    slider.style.width = `${slides.length * 100}%`;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${currentIndex * (100 / slides.length)}%)`;
    }, 5000);
}

setupSlider('slider');
