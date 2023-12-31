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
        "I am surrounded by abundance and prosperity.",
        "Every challenge I face is an opportunity to grow and improve.",
        "I am focused, persistent, and will never quit.",
        "I am worthy of success and all my dreams are coming true.",
        "I am full of positive loving energy.",
        "I welcome new experiences and open doors to new opportunities.",
        "I am in harmony with the beauty of the universe.",
        "My life is full of happiness, peace, and love.",
        "I am grateful for my healthy body, my calm mind, and my vibrant soul.",
        "I am a magnet for creative ideas and solutions.",
        "I choose to see the good in the people I interact with today.",
        "I trust myself and my instincts.",
        "Every day I am getting closer to achieving my goals.",
        "I am an embodiment of peace and tranquility.",
        "I celebrate my individuality and use my unique talents positively."
    ];

    // Function to dynamically create a color palette for background
    const createDynamicPalette = () => {
        const hue = Math.random() * 360;
        document.body.style.backgroundColor = `hsl(${hue}, 75%, 85%)`;
    };

    // Typewriter effect for displaying affirmations
    const typeWriterEffect = (text, element) => {
        let index = 0;
        element.textContent = ''; // Clear the text

        return new Promise((resolve) => {
            const timer = setInterval(() => {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                } else {
                    clearInterval(timer);
                    resolve(); // Resolve the promise after the animation
                }
            }, 50); // Typing speed in milliseconds
        });
    };

    // Generate and display a random affirmation
    const generateRandomAffirmation = async () => {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        const selectedAffirmation = affirmations[randomIndex];

        await typeWriterEffect(selectedAffirmation, affirmationText);
        createDynamicPalette(); // Change the background color with new affirmation
    };

    generateButton.addEventListener('click', generateRandomAffirmation);

    // Initialize with a random affirmation and background color
    generateRandomAffirmation();
});
