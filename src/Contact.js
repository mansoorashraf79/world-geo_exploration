import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your message has been sent!`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section style={{ padding: "60px 30px", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "15px", marginTop: "30px" }}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={{ padding: "12px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "16px" }} />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required style={{ padding: "12px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "16px" }} />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={{ padding: "12px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "16px" }} />
        <textarea name="message" rows="5" placeholder="Message" value={formData.message} onChange={handleChange} required style={{ padding: "12px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "16px" }}></textarea>
        <button type="submit" style={{ padding: "12px", background: "#f39c12", color: "white", border: "none", borderRadius: "5px", fontSize: "16px", cursor: "pointer" }}>Send Message</button>
      </form>

      <div style={{ textAlign: "center", marginTop: "30px", fontSize: "16px" }}>
        <p>Email: <a href="mailto:muhammadrafay4715@gmail.com" style={{ color: "#f39c12" }}>muhammadrafay4715@gmail.com</a></p>
        <p>Mobile: +92 3106015174 | WhatsApp: +92 3336922862</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/rafay-khan-b3ab941a8/" target="_blank" rel="noreferrer" style={{ color: "#f39c12" }}>Rafay Khan</a></p>
      </div>
    </section>
  );
};

export default Contact;
