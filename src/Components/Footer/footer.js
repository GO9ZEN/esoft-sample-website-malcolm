import React from "react";

import "./footer.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <div>
        <span>Sarasa Silva | © {year} All right reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
