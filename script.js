document.addEventListener('DOMContentLoaded', () => {
    const affirmationText = document.getElementById('affirmationText');
    const generateButton = document.getElementById('generateAffirmation');

    const affirmations = [
        "Embracing the beauty of this moment, I am filled with gratitude.",
        "As I navigate my day, I effortlessly attract positivity and abundance.",
        // ... Add more unique affirmations
    ];

    const createColorPalette = () => {
        const hue = Math.floor(Math.random() * 360);
        const pastel = `hsl(${hue}, 100%, 87.5%)`;
        document.body.style.backgroundColor = pastel;
    };

    const typeWriterEffect = (text, index = 0) => {
        if (index < text.length) {
            affirmationText.textContent = text.substring(0, index + 1);
            setTimeout(() => typeWriterEffect(text, index + 1), 50); // Recursive call for the next character
        }
    };

    const generateRandomAffirmation = () => {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        typeWriterEffect(affirmations[randomIndex]);
        createColorPalette(); // Change background color with new affirmation
    };

    generateButton.addEventListener('click', generateRandomAffirmation);

    // Initialize with a random affirmation and background color
    generateRandomAffirmation();
});
