document.addEventListener('DOMContentLoaded', () => {
    const affirmationText = document.getElementById('affirmationText');
    const generateButton = document.getElementById('generateAffirmation');

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
        "A beacon of love and compassion, I create a ripple of positive impact.",
        "Every day, I am becoming a more enlightened version of myself.",
        "I am a sanctuary of calm, unwavering in the face of chaos.",
        "With every breath, I inhale confidence and exhale doubt.",
        "I am the architect of my life; I build its foundation and choose its contents.",
        "Today, I am brimming with energy and overflowing with joy.",
        "My body is healthy; my mind is brilliant; my soul is tranquil.",
        "I am superior to negative thoughts and low actions.",
        "I have been given endless talents which I begin to utilize today.",
        "I forgive those who have harmed me in my past and peacefully detach from them.",
        "A river of compassion washes away my anger and replaces it with love.",
        "I am guided in my every step by Spirit who leads me towards what I must know and do.",
        "(For business owners) My business is growing, expanding, and thriving.",
        "Creative energy surges through me and leads me to new and brilliant ideas.",
        "Happiness is a choice. I base my happiness on my own accomplishments and the blessings I've been given.",
        "My ability to conquer my challenges is limitless; my potential to succeed is infinite."
        // ... Add more unique affirmations as needed
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
