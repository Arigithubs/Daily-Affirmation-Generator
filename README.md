# Sophisticated Daily Affirmation Generator

Welcome to the Sophisticated Daily Affirmation Generator project! Elevate your mindset with daily positive affirmations.

## Features

- Generate a random affirmation with a click.
- Elegant and responsive design.

## Technologies Used

- HTML
- CSS
- JavaScript

## JavaScript Logic Explanation

The `script.js` file generates a random affirmation from a predefined list. Key components:

### Affirmations Array

Customize the `affirmations` array with your uplifting statements.

```javascript
const affirmations = [
    "Today, I am filled with gratitude.",
    "I attract positivity and abundance into my life.",
    // Add more affirmations as needed
];
generateRandomAffirmation Function
Generates a random affirmation and temporarily disables the button to prevent rapid clicks.

javascript
Copy code
function generateRandomAffirmation() {
    generateAffirmationButton.disabled = true;
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    affirmationText.textContent = affirmations[randomIndex];
    setTimeout(function () {
        generateAffirmationButton.disabled = false;
    }, 1000);
}
Event Listener
The "Generate Affirmation" button triggers the generateRandomAffirmation function.

javascript
Copy code
generateAffirmationButton.addEventListener('click', generateRandomAffirmation);
Initial Generation
An initial affirmation is generated on page load.

javascript
Copy code
generateRandomAffirmation();
How to Use
Clone the repository.
bash
Copy code
git clone https://github.com/arigithubs/daily-affirmation-generator.git
Open index.html in your web browser.

Click "Generate Affirmation" for positivity.

Customization
Feel free to customize affirmations and styles to suit your preferences.

Styles
Styles are defined in style.css for an aesthetically pleasing experience.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Elevate your day with sophistication!