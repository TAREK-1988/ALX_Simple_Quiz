function checkAnswer() {
    // Correct answer for the quiz
    const correctAnswer = '4';

    // Get selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    const feedback = document.getElementById('feedback');

    // If no option is selected
    if (!selectedOption) {
        feedback.textContent = 'Please select an answer before submitting.';
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare user answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = 'Correct! Well done.';
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Attach event listener to the button
document
    .getElementById('submit-answer')
    .addEventListener('click', checkAnswer);
