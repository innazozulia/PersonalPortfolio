import React from "react";
import "./download.scss";

const Download = () => {
  const onButtonClick = () => {
    fetch("frontend_inna_zozulia.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "frontend_inna_zozulia.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="download">
      <div className="content">
        <h3>Click on below button to download CV file</h3>
        <button
          className="btn"
          onClick={onButtonClick}>
          Download
        </button>
      </div>
    </div>
  );
};

export default Download;
