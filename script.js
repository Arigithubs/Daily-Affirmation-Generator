document.addEventListener('DOMContentLoaded', function () {
    const affirmationText = document.getElementById('affirmationText');
    const generateAffirmationButton = document.getElementById('generateAffirmation');

    // Array of affirmations
    const affirmations = [
        "Today, I am filled with gratitude.",
        "I attract positivity and abundance into my life.",
        "I am confident and capable of achieving my goals.",
        "My potential is limitless.",
        "I choose to let go of negative thoughts and embrace positivity.",
        "I am worthy of love and happiness.",
        "I trust in the process of life.",
        "I am at peace with who I am.",
        "I radiate confidence, self-respect, and inner harmony.",
        "I am a beacon of love and compassion."
    ];

    // Function to generate a random affirmation
    function generateRandomAffirmation() {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        affirmationText.textContent = affirmations[randomIndex];
    }

    // Event listener for the "Generate Affirmation" button
    generateAffirmationButton.addEventListener('click', generateRandomAffirmation);

    // Initial generation of affirmation
    generateRandomAffirmation();
});
