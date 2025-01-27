import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-inner has-top-divider">
          <div className="brand footer-brand">
            <a href="#">
              <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg">
                <title>April</title>
                <defs>
                  <linearGradient
                    x1="114.674%"
                    y1="39.507%"
                    x2="-52.998%"
                    y2="39.507%"
                    id="logo-footer-a"
                  >
                    <stop stopColor="#8D92FA" offset="0%" />
                    <stop stopColor="#8D92FA" stopOpacity={0} offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="93.05%"
                    y1="19.767%"
                    x2="15.034%"
                    y2="85.765%"
                    id="logo-footer-b"
                  >
                    <stop stopColor="#FF3058" offset="0%" />
                    <stop stopColor="#FF6381" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="32.716%"
                    y1="-20.176%"
                    x2="32.716%"
                    y2="148.747%"
                    id="logo-footer-c"
                  >
                    <stop stopColor="#FF97AA" offset="0%" />
                    <stop stopColor="#FF97AA" stopOpacity={0} offset="100%" />
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M31.12 7.482C28.327 19.146 19.147 28.326 7.483 31.121A12.04 12.04 0 0 1 .88 24.518C3.674 12.854 12.854 3.674 24.518.879a12.04 12.04 0 0 1 6.603 6.603z"
                    fill="#312ECA"
                  />
                  <path
                    d="M28.874 3.922l-24.91 24.99a12.026 12.026 0 0 1-3.085-4.394C3.674 12.854 12.854 3.674 24.518.879a12.025 12.025 0 0 1 4.356 3.043z"
                    fill="url(#logo-footer-a)"
                  />
                  <g opacity=".88">
                    <path
                      d="M31.12 24.518a12.04 12.04 0 0 1-6.602 6.603C12.854 28.326 3.674 19.146.879 7.482A12.04 12.04 0 0 1 7.482.88c11.664 2.795 20.844 11.975 23.639 23.639z"
                      fill="url(#logo-footer-b)"
                    />
                    <path
                      d="M24.518 31.12C12.854 28.327 3.674 19.147.879 7.483A12.015 12.015 0 0 1 3.46 3.57L28.47 28.5a12.016 12.016 0 0 1-3.951 2.62z"
                      fill="url(#logo-footer-c)"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <ul className="footer-links list-reset">
            <li>
              <a href="/PrivacyPolicy">privacy policy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">FAQ's</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          <ul className="footer-social-links list-reset">
            <li>
              <a href="#">
                <span className="screen-reader-text">Facebook</span>
                <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                    fill="#FFF"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="screen-reader-text">Twitter</span>
                <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                    fill="#FFF"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="screen-reader-text">Google</span>
                <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                    fill="#FFF"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div className="footer-copyright">
            © 2018 April, all rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
