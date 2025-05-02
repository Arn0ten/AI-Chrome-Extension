# ArnGPT Chrome Extension

**ArnGPT** is a simple and lightweight Chrome extension that integrates with openAI. It provides an intuitive chat interface directly in the browser, allowing users to ask questions and receive instant responses from openAI. The extension includes a modern, dark-themed UI with a skeleton loader animation while waiting for a response.

## Features

- **Dark-themed UI**: A clean, modern dark UI inspired by ArnGPT for a seamless experience.
- **Skeleton Loader**: Displays an animated skeleton loader while waiting for ArnGPT's response.
- **Instant Answers**: Quickly submit a question and receive a direct answer within your browser.
- **Lightweight**: Designed to be fast and unobtrusive.

## Installation

1. Download the extension files or clone the repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension should now be installed, and the icon will appear in your browser toolbar.

## Usage

1. Click the **ArnGPT** extension icon in your browser toolbar.
2. A pop-up window will appear where you can type your question.
3. Once you enter your query, click the **Ask** button to send it to ArnGPT.
4. The response will appear below the input field. While waiting, a skeleton loader animation will be displayed to indicate that ArnGPT is processing the request.

## Screenshots

### UI - Asking a Question

![Screenshot 2025-05-02 144713](https://github.com/user-attachments/assets/f45b379e-51a8-450e-ba49-3d7cc1ff2be6)




### UI - During Response (Skeleton Loader)

![Screenshot 2025-05-02 144742](https://github.com/user-attachments/assets/49934e0f-c872-4bd6-83c2-28a76ae2bda5)



### UI - Output

![Screenshot 2025-05-02 144752](https://github.com/user-attachments/assets/368e2f8d-32c0-4b76-ac4a-c952341acbda)



## Technologies Used

- **HTML**: For the structure and layout of the extension's pop-up interface.
- **CSS**: To style the chat interface with a modern dark theme and skeleton loader animation.
- **JavaScript**: To handle user input, communication with the background script, and display of responses from ArnGPT.

## How It Works

1. **User Input**: When a user enters a question and clicks "Ask", the extension sends the input to a background script.
2. **Skeleton Loader**: While waiting for the response, a skeleton loader is shown to indicate that the request is being processed.
3. **Response Display**: Once ArnGPT processes the request, the response is displayed, replacing the loader with the answer.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests for bug fixes, new features, or improvements.


