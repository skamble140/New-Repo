document.getElementById('runButton').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;
    const outputElement = document.getElementById('output');

    // For now, we'll just show a placeholder message.
    // Later, you will replace this with a fetch call to your backend.
    if (userInput) {
        outputElement.textContent = `Processing prompt: "${userInput}"\n\n(This is a placeholder. Your backend is not yet connected.)`;
    } else {
        outputElement.textContent = 'Please enter a prompt before running.';
    }
});
