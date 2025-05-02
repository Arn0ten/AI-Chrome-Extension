async function getChatGPTResponse(userInput) {
    const apiKey = "***********"; //Ilisdi ranig openAI na api key yawa walay libre
    const endpoint = "https://api.openai.com/v1/chat/completions";
  
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: userInput }
        ],
        max_tokens: 100,
        temperature: 0.7
      }),
    });
  
    if (response.status === 429) {
      return "⚠️ Rate limit hit. Please wait a bit and try again.";
    }
  
    if (!response.ok) {
      const err = await response.text();
      return `❌ API Error: ${response.status} - ${err}`;
    }
  
    const data = await response.json();
  
    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content.trim();
    } else {
      return "⚠️ No response from ChatGPT.";
    }
  }
  

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getChatGPTResponse") {
      getChatGPTResponse(request.userInput).then(response => {
        sendResponse({ response: response });
      });
      return true;
    }
  });
  