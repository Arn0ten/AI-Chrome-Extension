document.getElementById("askButton").addEventListener("click", function () {
  const userInput = document.getElementById("userInput").value;
  const skeletonLoader = document.getElementById("skeletonLoader");
  const responseText = document.getElementById("responseText");

  if (userInput.trim() !== "") {
    skeletonLoader.style.display = "block";
    responseText.textContent = "Thinking...";  

    chrome.runtime.sendMessage(
      { action: "getChatGPTResponse", userInput: userInput },
      function (response) {
        skeletonLoader.style.display = "none";

        if (chrome.runtime.lastError) {
          responseText.textContent = "Error: " + chrome.runtime.lastError.message;
        } else if (!response || !response.response) {
          responseText.textContent = "Error: No response received from background script.";
        } else {
          responseText.textContent = response.response;
        }
      }
    );
  } else {
    responseText.textContent = "Please enter a question.";
  }
});
