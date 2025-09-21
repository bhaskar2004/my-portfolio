import React, { useState } from "react";

const PDF_PATH =
  process.env.NODE_ENV === "production"
    ? "/my-portfolio/Bhaskar_T_Resume.pdf"
    : "/Bhaskar_T_Resume.pdf";

const Resume = () => {
  const [error, setError] = useState(false);

  return (
    <div style={{ height: "90vh" }}>
      <h1>My Resume</h1>
      {!error ? (
        <iframe
          src={PDF_PATH}
          title="Resume"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          onError={() => setError(true)}
        />
      ) : (
        <div>
          <p>
            Unable to display PDF.{" "}
            <a href={PDF_PATH} download>
              Download Resume
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Resume;