import React from "react";
import { Link } from "react-router-dom";
import abc from './Image/133768347085348077.jpg';

const services = [
  { title: "Mineral Exploration", img: abc, desc: "Survey & discovery of minerals" },
  { title: "Remote Sensing & GIS", img: abc, desc: "Mapping & resource assessment" },
  { title: "Mine Surveying", img: abc, desc: "Site investigations & safety analysis" },
  { title: "Geological Mapping", img: abc, desc: "Structural mapping & reporting" },
];

const projects = [
  { title: "Iron Ore Exploration", img: abc },
  { title: "Gold Exploration", img: abc },
  { title: "Emerald Exploration", img: abc },
];

const gallery = [
  { img: abc },
  { img: abc },
  { img: abc },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${abc})`,
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1>Exploring Minerals. Delivering Results.</h1>
          <p>Advanced Geological Exploration & Mining Services Across Pakistan</p>
          <Link
            to="/projects"
            style={{ background: "#f39c12", padding: "12px 25px", color: "white", borderRadius: "5px" }}
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "60px 30px", textAlign: "center" }}>
        <h2>Our Services</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            marginTop: "30px",
          }}
        >
          {services.map((s, idx) => (
            <div key={idx} style={{ background: "#ecf0f1", padding: "20px", borderRadius: "8px" }}>
              <img
                src={s.img}
                alt={s.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects-preview" style={{ padding: "60px 30px" }}>
        <h2 style={{ textAlign: "center" }}>Our Projects</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {projects.map((p, idx) => (
            <div key={idx}>
              <img
                src={p.img}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h4 style={{ textAlign: "center", marginTop: "10px" }}>{p.title}</h4>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link
            to="/projects"
            style={{ background: "#f39c12", padding: "10px 20px", color: "white", borderRadius: "5px" }}
          >
            See All Projects
          </Link>
        </div>
      </section>

      {/* Field Gallery Preview */}
      <section id="gallery-preview" style={{ padding: "60px 30px" }}>
        <h2 style={{ textAlign: "center" }}>Field Gallery</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {gallery.map((g, idx) => (
            <div key={idx}>
              <img
                src={g.img}
                alt="Field Work"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link
            to="/gallery"
            style={{ background: "#f39c12", padding: "10px 20px", color: "white", borderRadius: "5px" }}
          >
            View Full Gallery
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
