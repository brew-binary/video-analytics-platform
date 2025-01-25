# Video to Text Conversion Feature

This project implements a **Video to Text Conversion** feature. The following updates were made to both the backend and frontend to enable this functionality:

## Backend Changes

- **New Route Added**: `/video_to_text`
  - Accepts a video file via POST request.
  - Extracts the audio from the video using `moviepy`.
  - Converts the audio to text using the `speech_recognition` library (Google Speech Recognition API).
  - Saves the extracted text as a `.txt` file in the `/tmp` directory.
  - Returns the text and the filename in the API response.

- **Temporary File Management**:
  - Video and audio files are saved temporarily in `/tmp` and deleted after processing.

- **Dependencies Added**:
  - `moviepy`: For extracting audio from video.
  - `speech_recognition`: For converting audio to text.
  - Ensure both are installed using:
    ```bash
    pip install moviepy SpeechRecognition
    ```

- **Error Handling**:
  - Validates video file formats (`mp4`, `webm`, `avi`).
  - Handles exceptions during file processing and text conversion.

### Backend Route Example
- **Endpoint**: `/video_to_text`
- **Method**: `POST`
- **Request Body**:
  - `video`: Video file (required).
- **Response**:
  ```json
  {
    "filename": "example.txt",
    "script": "Extracted text from the video",
    "status": "success"
  }
  ```

## Frontend Changes

- **New UI Components**:
  - A form to upload video files and submit them for processing.
  - A container to display the extracted script after successful submission.
  - Buttons for:
    - **Copying the script to clipboard**.
    - **Downloading the script as a `.txt` file**.

- **Form and Buttons**:
  - Input field with the class `video-url-input`.
  - Submit button with the class `form-submit-btn`.
  - Script container with the class `script-container` (hidden until form submission).
  - Download button with the class `download-script-btn`.
  - Copy-to-clipboard button with the class `copy-clipboard-btn`.

- **Functionality**:
  - Sends the uploaded video file to the `/video_to_text` backend route.
  - Displays the extracted text in the `script-container`.
  - Allows users to:
    - Copy the text to their clipboard.
    - Download the text as a `.txt` file.

### Frontend Component Example
- **Component**: `VideoConverterForm`
- **Features**:
  - File upload and submission.
  - Script display and manipulation.
  - Clipboard and download functionality.

## Loom Demonstrations

- **Backend Functionality Overview**: [Video Link](https://www.loom.com/share/df1392c3c4ec42ae8b169a08636b64b9?sid=ec71d8f2-3536-4828-8b60-18eb5dd5e00d)
- **Frontend Functionality Overview**: [Video Link](https://www.loom.com/share/08e46ca1ce4a430d94b0a1f380303579?sid=afc10203-2980-45ca-a495-86e78f051796)


## Notes

- Ensure the `/tmp` directory is writable by the application for temporary file storage.
- Use the provided Loom videos for a step-by-step walkthrough of the implemented functionality.

## Future Enhancements
- Add support for multiple languages in speech recognition.
- Optimize large video file handling.
- Improve UI/UX for better user interaction.
- moving to modular backend 
- unit tests support 
- using better styling with tailwind 
- best ui structure