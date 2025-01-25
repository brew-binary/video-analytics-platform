import React, { useState } from "react";

const VideoConverterForm = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [script, setScript] = useState(""); // Holds the extracted script content
  const [isScriptVisible, setIsScriptVisible] = useState(false); // Controls visibility of the script container
  const [downloadFileName, setDownloadFileName] = useState(null);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!videoFile) {
      alert("Please upload a video file!");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);

    try {
      const response = await fetch("http://localhost:8006/video_to_text", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setScript(data.script); // Set the extracted script
        setDownloadFileName(data.filename); // Set the filename for download
        setIsScriptVisible(true); // Show the script container
        alert("Video converted successfully!");
      } else {
        alert("Failed to convert video!");
      }
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("An error occurred while converting the video.");
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(script).then(() => {
      alert("Script copied to clipboard!");
    });
  };

  const handleDownloadScript = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = `http://localhost:8006/download_video?filename=${downloadFileName}`;
    downloadLink.download = downloadFileName;
    downloadLink.click();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="video-upload">Upload Video:</label>
          <input
            type="file"
            id="video-upload"
            accept="video/*"
            className="video-url-input" // Input field with class "video-url-input"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="form-submit-btn"> {/* Submit button with class "form-submit-btn" */}
          Convert Video
        </button>
      </form>

      {isScriptVisible && ( // Script container becomes visible only after form submission
        <div className="script-container" style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>Extracted Script:</h3>
          <p>{script}</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              className="download-script-btn" // Download button with class "download-script-btn"
              onClick={handleDownloadScript}
            >
              Download Script
            </button>
            <button
              className="copy-clipboard-btn" // Copy-to-clipboard button with class "copy-clipboard-btn"
              onClick={handleCopyToClipboard}
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoConverterForm;
