document.getElementById('word-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the input text and split it into words
    let text = document.getElementById('text-input').value;
    let words = text.toLowerCase().match(/\b\w+\b/g);

    if (!words) {
        return;
    }

    // Count the frequency of each word submitted
    let wordCounts = {};
    words.forEach(function(word) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    // Get the maximum frequency to scale the word sizes
    let maxCount = Math.max(...Object.values(wordCounts));

    // Clear previous word cloud
    let wordCloud = document.getElementById('word-cloud');
    wordCloud.innerHTML = '';

    // Create a span for each word with a font size proportional to its frequency
    for (let word in wordCounts) {
        let span = document.createElement('span');
        span.className = 'word';
        let size = (wordCounts[word] / maxCount) * 50 + 10;
        span.style.fontSize = `${size}px`;
        span.textContent = word;
        wordCloud.appendChild(span);
    }
});