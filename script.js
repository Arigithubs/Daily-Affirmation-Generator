document.addEventListener('DOMContentLoaded', function () {
    const affirmationText = document.getElementById('affirmationText');
    const generateAffirmationButton = document.getElementById('generateAffirmation');

    const affirmations = [
        "Embracing the beauty of this moment, I am filled with gratitude.",
        "As I navigate my day, I effortlessly attract positivity and abundance.",
        // Add more affirmations as needed...
    ];

    function generateRandomAffirmation() {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        affirmationText.textContent = affirmations[randomIndex];
    }

    function animateText(text) {
        affirmationText.textContent = '';
        let charIndex = 0;
        const timer = setInterval(() => {
            if (charIndex < text.length) {
                affirmationText.textContent += text[charIndex];
                charIndex++;
            } else {
                clearInterval(timer);
            }
        }, 50);
    }

    generateAffirmationButton.addEventListener('click', () => {
        const affirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
        animateText(affirmation);
    });

    // Generate an initial affirmation
    generateRandomAffirmation();
});
