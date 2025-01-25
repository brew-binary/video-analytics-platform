import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import VideoFormatterForm from "./VideoFormatterForm";

const VideoToTxtConverter = () => {
  const [videoConverted, setVideoConverted] = useState(false);
  const [downloadFileName, setDownloadFileName] = useState(null);
  const backendUrl = "http://localhost:8006";

  useEffect(() => {
    console.log(
      "From use effect: New value of videoConverted : ",
      videoConverted
    );
  }, [videoConverted]);

  const DownloadFile = async () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = `${backendUrl}/download_video?filename=${downloadFileName}`;
    downloadLink.download = downloadFileName;
    downloadLink.click();
  };

  return (
    <>
      <Header />
      <div className="body-wrap boxed-container" style={{ zIndex: 0 }}>
        <header>
          <div className="header-shape header-shape-1">
            <svg
              width={337}
              height={222}
              viewBox="0 0 337 222"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="55.434%"
                  x2="50%"
                  y2="0%"
                  id="header-shape-1"
                >
                  <stop stopColor="#E0E1FE" stopOpacity={0} offset="0%" />
                  <stop stopColor="#E0E1FE" offset="100%" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="site-header-inner" style={{ backgroundColor: "white" }}>
            <div className="brand header-brand">
              <h1 className="m-0">
                <a href="#">
                  <title>Videoanalytics.usln.in</title>
                </a>
              </h1>
            </div>
          </div>
        </header>
        <main>
          <section className="hero">
            <div className="container">
              <div className="hero-inner">
                <div className="hero-copy">
                  <h1 className="hero-title mt-0">
                    Convert Videos to Text in a Click!
                  </h1>
                  <p className="hero-paragraph">
                    Welcome to our video-to-text converter! Upload your video
                    files, and our tool will extract spoken content and convert
                    it into text effortlessly.
                  </p>
                  <VideoFormatterForm
                    videoConverted={videoConverted}
                    setVideoConverted={setVideoConverted}
                    setDownloadFileName={setDownloadFileName}
                  />
                  {videoConverted && (
                    <div
                      style={{
                        marginTop: 15,
                        padding: 10,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid rgba(0,0,0,0.5)",
                      }}
                      id="download_container"
                    >
                      <div id="filename_div">{downloadFileName}</div>
                      <div>
                        <button
                          className="button button-primary button-block"
                          id="downloadButton"
                          onClick={DownloadFile}
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default VideoToTxtConverter;
