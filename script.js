document.addEventListener('DOMContentLoaded', function () {
    const affirmationText = document.getElementById('affirmationText');
    const generateAffirmationButton = document.getElementById('generateAffirmation');

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

    function generateRandomAffirmation() {
        generateAffirmationButton.disabled = true;
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        affirmationText.textContent = affirmations[randomIndex];
        setTimeout(function () {
            generateAffirmationButton.disabled = false;
        }, 1000);
    }

    generateAffirmationButton.addEventListener('click', generateRandomAffirmation);

    generateRandomAffirmation();
});
