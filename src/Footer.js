import React from "react";
import "./Footer.css"; // Optional: for additional styling

const Footer = () => {
  return (
    <footer style={{ background: "#2c3e50", color: "white", textAlign: "center", padding: "30px 20px", marginTop: "40px" }}>
      <p>
        &copy; 2025 World Geo Exploration. All Rights Reserved.
      </p>
      <p style={{ marginTop: "10px" }}>
        Email: <a href="mailto:muhammadrafay4715@gmail.com" style={{ color: "#f39c12" }}>muhammadrafay4715@gmail.com</a> | 
        Mobile: +92 3106015174 | WhatsApp: +92 3336922862
      </p>
      <p>
        LinkedIn: <a href="https://www.linkedin.com/in/rafay-khan-b3ab941a8/" target="_blank" rel="noreferrer" style={{ color: "#f39c12" }}>Rafay Khan</a>
      </p>
    </footer>
  );
};

export default Footer;
