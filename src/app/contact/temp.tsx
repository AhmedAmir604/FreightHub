import React, { useEffect } from "react";
import lottie from "lottie-web";
import "lord-icon-element";

const MyComponent: React.FC = () => {
  useEffect(() => {
    // Register the lottie-web animation library for Lordicon
    window.lottie = lottie;
  }, []);

  return (
    <div>
      <h1>Welcome to My React Website</h1>
      <p>Here is an animated icon from Lordicon:</p>
      <lord-icon
        src="https://cdn.lordicon.com/dnoiydox.json"
        trigger="hover"
        style={{ width: "150px", height: "150px" }}
      ></lord-icon>
    </div>
  );
};

export default MyComponent;
