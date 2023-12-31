document.addEventListener('DOMContentLoaded', function () {
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

    function generateRandomAffirmation() {
        generateAffirmationButton.disabled = true;
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        const chosenAffirmation = affirmations[randomIndex];

        animateText(chosenAffirmation, affirmationText, 100, 30, function () {
            setTimeout(function () {
                generateAffirmationButton.disabled = false;
            }, 1000);
        });
    }

    generateAffirmationButton.addEventListener('click', generateRandomAffirmation);

    generateRandomAffirmation();

    // Function to animate text
    function animateText(text, element, speed, delay, callback) {
        const characters = text.split('');
        let currentIndex = 0;

        function displayNextCharacter() {
            if (currentIndex < characters.length) {
                element.innerHTML += characters[currentIndex];
                currentIndex++;
                setTimeout(displayNextCharacter, speed);
            } else {
                if (callback) {
                    setTimeout(callback, delay);
                }
            }
        }

        displayNextCharacter();
    }
});
