import React from "react";
import abc from "./Image/133768347085348077.jpg";


const services = [
  { title: "Mineral Exploration", img: abc, desc: "Field surveys and discovery of metallic & non-metallic minerals across Pakistan." },
  { title: "Remote Sensing & GIS", img: abc, desc: "Mapping, resource assessment and structural interpretation using advanced software." },
  { title: "Mine Surveying", img: abc, desc: "Site investigations, strike/dip measurements, and safety analysis for mining operations." },
  { title: "Geological Mapping", img: abc, desc: "Structural mapping, sample collection, reporting, and geological analysis." },
];

const About = () => {
  return (
    <section style={{ padding: "60px 30px", maxWidth: "1200px", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>About World Geo Exploration</h2>
      <p style={{ maxWidth: "900px", margin: "20px auto", fontSize: "18px", lineHeight: "1.6", textAlign: "center" }}>
        World Geo Exploration is a professional geological services company led by Muhammad Rafay.
        We specialize in mineral exploration, remote sensing, GIS surveys, mine surveying, and
        geological mapping across Pakistan. Our mission is to deliver innovative and sustainable
        exploration solutions with accuracy, efficiency, and safety.
      </p>

      <h2 style={{ textAlign: "center", marginTop: "60px" }}>Our Services</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", marginTop: "30px" }}>
        {services.map((s, idx) => (
          <div key={idx} style={{ background: "#ecf0f1", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
            <img 
              src={s.img} 
              alt={s.title} 
              style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px", marginBottom: "15px" }}
            />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
