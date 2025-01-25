import React from "react";

const Services = () => {
  return (
    <section className="features section" id="services">
      <div className="container">
        <div className="features-inner section-inner">
          <div className="features-header text-center">
            <div className="container-sm">
              <h2 className="section-title mt-0">Our Services</h2>
              <p className="section-paragraph">
                Our converter supports an extensive range of video and image
                formats, ensuring compatibility with different devices and
                platforms. From popular formats like MP4, AVI, and MOV to image
                formats such as JPEG, PNG, and GIF, you can convert your media
                files to the format that suits your needs
              </p>
            </div>
          </div>
          <div className="features-wrap">
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon" style={{ background: "#C6FDF3" }}>
                  <svg
                    width={88}
                    height={88}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="nonzero">
                      <circle fill="#1ADAB7" cx={38} cy={50} r={5} />
                      <path
                        d="M53 42h2v-8a1 1 0 0 0-1-1h-8v2h5.586l-8.293 8.293a1 1 0 1 0 1.414 1.414L53 36.414V42z"
                        fill="#1ADAB7"
                      />
                      <path
                        fill="#83F0DD"
                        d="M34 41.414l3-3 3 3L41.414 40l-3-3 3-3L40 32.586l-3 3-3-3L32.586 34l3 3-3 3zM55.414 48L54 46.586l-3 3-3-3L46.586 48l3 3-3 3L48 55.414l3-3 3 3L55.414 54l-3-3z"
                      />
                    </g>
                  </svg>
                </div>
                <h4 className="feature-title h3-mobile mb-8">
                  Image Format Converter
                </h4>
                <p className="text-sm">
                  Transform your images effortlessly as we convert them into
                  popular formats like JPEG, PNG, GIF, BMP, TIFF, and more.
                </p>
              </div>
            </div>
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon" style={{ background: "#E0E1FE" }}>
                  <svg
                    width={88}
                    height={88}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="nonzero">
                      <path
                        d="M41 42h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zM41 55h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z"
                        fill="#4950F6"
                      />
                      <path
                        fill="#8D92FA"
                        d="M45 34h10v2H45zM45 39h10v2H45zM45 47h10v2H45zM45 52h10v2H45z"
                      />
                    </g>
                  </svg>
                </div>
                <h4 className="feature-title h3-mobile mb-8">
                  File Format Converter
                </h4>
                <p className="text-sm">
                  Elevate your video content by converting it into various
                  formats such as MP4, AVI, MOV, WMV, FLV, MKV, and more, with
                  just a few clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services