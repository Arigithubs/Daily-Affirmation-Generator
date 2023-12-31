document.addEventListener('DOMContentLoaded', () => {
    const affirmationText = document.getElementById('affirmationText');
    const generateAffirmationButton = document.getElementById('generateAffirmation');

    const affirmations = [
        "Embracing the beauty of this moment, I am filled with gratitude.",
        "As I navigate my day, I effortlessly attract positivity and abundance.",
        "Confident in my abilities, I gracefully achieve my goals.",
        "In the vast expanse of my potential, I discover limitless possibilities.",
        "Releasing negativity, I choose to embrace positivity in every thought.",
        "Worthy of love and happiness, I radiate these feelings to the world.",
        "Trusting the intricate process of life, I find peace in each step.",
        "Harmonizing with my true self, I am at peace with who I am.",
        "Radiating confidence, self-respect, and inner harmony, I am unstoppable.",
        "A beacon of love and compassion, I create a ripple of positive impact."
    ];

    // Function to toggle the button's disabled state
    const toggleButtonState = (isDisabled) => {
        generateAffirmationButton.disabled = isDisabled;
    }

    // Function to get a random index from an array
    const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

    // Enhanced text animation function using async/await
    const animateText = async (text, element, { speed, delay }) => {
        element.innerHTML = '';
        const characters = text.split('');
        for (let i = 0; i < characters.length; i++) {
            element.innerHTML += characters[i];
            await new Promise(resolve => setTimeout(resolve, speed));
        }
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    // Function to generate and display a random affirmation
    const generateRandomAffirmation = async () => {
        toggleButtonState(true);
        const chosenAffirmation = affirmations[getRandomIndex(affirmations)];
        await animateText(chosenAffirmation, affirmationText, { speed: 100, delay: 30 });
        toggleButtonState(false);
    }

    // Event listener for the Generate Affirmation button
    generateAffirmationButton.addEventListener('click', generateRandomAffirmation);

    // Initialize the app with a random affirmation
    generateRandomAffirmation();
});
