import React from "react";
import Nav from "./Nav";

function Resume() {
  return (
    <div>
      <Nav />
      <h2>My Resume</h2>
      <iframe
        src="/21PA1A1270_MATLAPUDIHAARIKA.pdf"
        style={{ width: "100%", height: "80vh", border: "none" }}
        title="Resume"
      ></iframe>
    </div>
  );
}

export default Resume;
