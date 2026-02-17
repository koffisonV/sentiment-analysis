let RunSentimentAnalysis = () => {
  textToAnalyze = document.getElementById("textToAnalyze").value;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Parse the JSON response
      let response = JSON.parse(xhttp.responseText);

      // Create pretty HTML output
      let formattedResponse = `
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
                    <h4 style="margin-bottom: 15px;">Emotion Scores:</h4>
                    <div style="margin-bottom: 10px;">
                        <span style="display: inline-block; width: 100px;">😠 Anger:</span>
                        <strong>${response.anger}%</strong>
                        <div class="progress" style="height: 10px; margin-top: 5px;">
                            <div class="progress-bar bg-danger" style="width: ${response.anger}%"></div>
                        </div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <span style="display: inline-block; width: 100px;">🤢 Disgust:</span>
                        <strong>${response.disgust}%</strong>
                        <div class="progress" style="height: 10px; margin-top: 5px;">
                            <div class="progress-bar bg-warning" style="width: ${response.disgust}%"></div>
                        </div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <span style="display: inline-block; width: 100px;">😨 Fear:</span>
                        <strong>${response.fear}%</strong>
                        <div class="progress" style="height: 10px; margin-top: 5px;">
                            <div class="progress-bar bg-secondary" style="width: ${response.fear}%"></div>
                        </div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <span style="display: inline-block; width: 100px;">😊 Joy:</span>
                        <strong>${response.joy}%</strong>
                        <div class="progress" style="height: 10px; margin-top: 5px;">
                            <div class="progress-bar bg-success" style="width: ${response.joy}%"></div>
                        </div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <span style="display: inline-block; width: 100px;">😢 Sadness:</span>
                        <strong>${response.sadness}%</strong>
                        <div class="progress" style="height: 10px; margin-top: 5px;">
                            <div class="progress-bar bg-info" style="width: ${response.sadness}%"></div>
                        </div>
                    </div>
                    <hr style="margin: 20px 0;">
                    <div style="text-align: center; font-size: 1.3em;">
                        <p>Dominant Emotion: <span class="badge badge-primary" style="font-size: 1.1em;">${response.dominant_emotion.toUpperCase()}</span></p>
                    </div>
                </div>
            `;

      document.getElementById("system_response").innerHTML = formattedResponse;
    }
  };
  xhttp.open("GET", "emotionDetector?textToAnalyze=" + textToAnalyze, true);
  xhttp.send();
};
