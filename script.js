document.addEventListener('DOMContentLoaded', () => {
    const affirmationText = document.getElementById('affirmationText');
    const generateButton = document.getElementById('generateAffirmation');

    const affirmations = [
        "Embracing the beauty of this moment, I am filled with gratitude.",
        "As I navigate my day, I effortlessly attract positivity and abundance.",
        // ... Add more as needed
    ];

    const displayAffirmation = (affirmation) => {
        affirmationText.textContent = '';
        let index = 0;
        const typeWriter = setInterval(() => {
            if (index < affirmation.length) {
                affirmationText.textContent += affirmation.charAt(index);
                index++;
            } else {
                clearInterval(typeWriter);
            }
        }, 50); // Typing speed in milliseconds
    };

    const generateRandomAffirmation = () => {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        displayAffirmation(affirmations[randomIndex]);
    };

    generateButton.addEventListener('click', generateRandomAffirmation);

    // Initialize with a random affirmation
    generateRandomAffirmation();
});
