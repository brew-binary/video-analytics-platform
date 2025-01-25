import React from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const ImageConverterForm = ({imageConverted,setImageConverted,setDownloadFileName}) => {
  const backendUrl = "http://localhost:8006"
  const [imageFormat, setImageFormat] = useState("jpeg");
  const [isLoading,setIsLoading] = useState(false)
  const [file, setFile] = useState(null);

  const convertImage = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Select a File for Conversion!");
      return;
    }
    setIsLoading(true)
    const formData = new FormData();
    formData.append("file", file);
    formData.append("format", imageFormat);
  
    try {
      const response = await fetch(`${backendUrl}/imageConverter`, {
        method: "POST",
        body: formData,  // Pass formData directly as the body
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log("Response data from Image converter is:", responseData);
      setIsLoading(false)
      if(responseData?.status==="success"){
        setImageConverted(true)
        setDownloadFileName(responseData?.filename)
      }else{
	        alert("Something Went Wrong.Make sure the File is an Image File !!")
}
    } catch (error) {
      console.error("Error occurred in convertImage:", error);
    }
  };
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setImageConverted(false)
  };

  return (
    <form id="converterForm" method="post" encType="multipart/form-data">
      <div className="hero-form field field-grouped">
        <div className="control control-expanded">
          <input
            className="input"
            type="file"
            name="image"
            id="inputImage"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <select
            id="image_format"
            style={{ height: "100%", border: "none" }}
            onChange={(e) => setImageFormat(e.target.value)}
            value={imageFormat}
          >
            <option value="jpeg">JPEG</option>
            <option value="png">PNG</option>
            <option value="gif">GIF</option>
          </select>
        </div>
        <div id="image_convert_button">
          <button
            className="button button-primary button-block"
            id="convertButton"
            onClick={convertImage}
          >
            Convert
          </button>
        </div>
      </div>
      {isLoading && <Loading/>}
    </form>
  );
};

export default ImageConverterForm;
