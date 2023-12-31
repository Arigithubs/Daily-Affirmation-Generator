document.addEventListener('DOMContentLoaded', () => {
    const affirmationText = document.getElementById('affirmationText');
    const generateButton = document.getElementById('generateAffirmation');

    const affirmations = [
        "Embracing the beauty of this moment, I am filled with gratitude.",
        "As I navigate my day, I effortlessly attract positivity and abundance.",
        // Add more as needed...
    ];

    const displayAffirmation = () => {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        const affirmation = affirmations[randomIndex];
        affirmationText.textContent = affirmation;
    };

    const animateAffirmation = () => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < affirmations.length) {
                displayAffirmation();
                i++;
            } else {
                clearInterval(timer);
            }
        }, 4000); // Change affirmation every 4 seconds
    };

    generateButton.addEventListener('click', displayAffirmation);

    // Initialize with a random affirmation
    animateAffirmation();
});
