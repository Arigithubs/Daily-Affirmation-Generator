document.addEventListener('DOMContentLoaded', () => {
    const affirmationText = document.getElementById('affirmationText');
    const generateButton = document.getElementById('generateAffirmation');

    const affirmations = [
        "Embracing the beauty of this moment, I am filled with gratitude.",
        "As I navigate my day, I effortlessly attract positivity and abundance.",
        // ... Add more unique affirmations
    ];

    // Unique touch: Random background color on new affirmation
    const setBackgroundColor = () => {
        const colors = ['#e0f2f1', '#ffe0b2', '#ffccbc', '#c8e6c9', '#d1c4e9']; // Soft pastel palette
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    };

    const displayAffirmation = (affirmation) => {
        affirmationText.textContent = affirmation;
        setBackgroundColor(); // Change background color with new affirmation
    };

    const generateRandomAffirmation = () => {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        displayAffirmation(affirmations[randomIndex]);
    };

    generateButton.addEventListener('click', generateRandomAffirmation);

    // Initialize with a random affirmation and background color
    generateRandomAffirmation();
});
