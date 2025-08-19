import React from "react";
import abc from "./Image/133768347085348077.jpg"

const projects = [
  {
    title: "Iron Ore Exploration",
    img: abc,
    desc: "High-grade Limonite-Siderite deposits."
  },
  {
    title: "Gold Exploration",
    img: abc,
    desc: "Fine gold and quartz in Chitral."
  },
  {
    title: "Emerald Exploration",
    img:  abc,
    desc: "Emerald zones mapped in Swat."
  },
  {
    title: "Placer Gold Project",
    img: abc,
    desc: "Along Indus River, Attock District."
  },
  {
    title: "Copper Deposits",
    img:  abc,
    desc: "Khuzdar, Baluchistan & Zambia."
  }
];



const Projects = () => {
  return (
    <section style={{padding:"60px 30px", maxWidth:"1200px", margin:"auto"}}>
      <h2 style={{textAlign:"center"}}>All Projects</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"20px", marginTop:"30px"}}>
        {projects.map((p, idx) => (
          <div key={idx} style={{border:"1px solid #ccc", borderRadius:"8px", overflow:"hidden"}}>
            <img src={p.img} alt={p.title} style={{width:"100%"}}/>
            <div style={{padding:"15px"}}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
