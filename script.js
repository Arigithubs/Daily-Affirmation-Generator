document.addEventListener('DOMContentLoaded', function () {
    // Get the HTML elements needed for interaction
    const affirmationText = document.getElementById('affirmationText');
    const generateAffirmationButton = document.getElementById('generateAffirmation');

    // Array of positive affirmations
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
        // Disable the button temporarily to prevent rapid clicks
        generateAffirmationButton.disabled = true;

        // Generate a random index within the range of the affirmations array
        const randomIndex = Math.floor(Math.random() * affirmations.length);

        // Set the text content of the affirmationText element to the randomly selected affirmation
        affirmationText.textContent = affirmations[randomIndex];

        // Enable the button after a brief delay to allow users to click again
        setTimeout(function () {
            generateAffirmationButton.disabled = false;
        }, 1000);
    }

    // Event listener for the "Generate Affirmation" button
    generateAffirmationButton.addEventListener('click', generateRandomAffirmation);

    // Initial generation of affirmation when the page loads
    generateRandomAffirmation();
});
