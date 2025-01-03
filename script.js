const slideIndices = {};

document.querySelectorAll(".slideshow-container").forEach((slideshow) => {
    const id = slideshow.id;
    slideIndices[id] = 0;
    showSlides(slideIndices[id], id); // Show the first slide
});

// Function to navigate slides
function changeSlide(n, slideshowId) {
    slideIndices[slideshowId] += n; // Update index for the specific slideshow
    showSlides(slideIndices[slideshowId], slideshowId);
}

// Function to display slides
function showSlides(n, slideshowId) {
    const slides = document
        .getElementById(slideshowId)
        .getElementsByClassName("slide");

    if (n >= slides.length) {
        slideIndices[slideshowId] = 0; // Loop back to the first slide
    }
    if (n < 0) {
        slideIndices[slideshowId] = slides.length - 1; // Loop to the last slide
    }

    // Hide all slides and display only the active one
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndices[slideshowId]].style.display = "block";
}

setInterval(() => {
    for (const id in slideIndices) {
        changeSlide(1, id);
    }
}, 5000); // Change image every 5 seconds