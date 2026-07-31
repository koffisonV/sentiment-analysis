const EMOTION_COLORS = {
    anger: 'bar-anger',
    disgust: 'bar-disgust',
    fear: 'bar-fear',
    joy: 'bar-joy',
    sadness: 'bar-sadness',
};

function buildEmotionRow(emotion, score) {
    const colorClass = EMOTION_COLORS[emotion] ?? '';
    return `
        <div class="emotion-row">
            <span class="emotion-name">${emotion}</span>
            <div class="emotion-bar-track">
                <div class="emotion-bar-fill ${colorClass}" style="width: ${score}%"></div>
            </div>
            <span class="emotion-score">${score}%</span>
        </div>
    `;
}

function RunSentimentAnalysis() {
    const textToAnalyze = document.getElementById('textToAnalyze').value.trim();

    if (!textToAnalyze) {
        document.getElementById('system_response').innerHTML =
            '<p class="error-state">Please enter some text before analyzing.</p>';
        return;
    }

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState !== 4) return;

        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            const emotions = ['anger', 'disgust', 'fear', 'joy', 'sadness'];

            const rows = emotions
                .filter(e => response[e] !== undefined)
                .map(e => buildEmotionRow(e, response[e]))
                .join('');

            document.getElementById('system_response').innerHTML = `
                ${rows}
                <div class="dominant-section">
                    <div class="dominant-label">Dominant emotion</div>
                    <span class="dominant-badge">${response.dominant_emotion}</span>
                </div>
            `;
        } else {
            let message = 'An error occurred. Please try again.';
            try {
                const err = JSON.parse(this.responseText);
                if (err.error) message = err.error;
            } catch (_) { }
            document.getElementById('system_response').innerHTML =
                `<p class="error-state">${message}</p>`;
        }
    };

    xhttp.open('GET', 'emotionDetector?textToAnalyze=' + encodeURIComponent(textToAnalyze), true);
    xhttp.send();
}
