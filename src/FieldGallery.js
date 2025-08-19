import React from "react";
import abc from "./Image/133768347085348077.jpg"

const gallery = [
  abc,
  abc,
  abc,
  abc,
  abc,
];

const FieldGallery = () => {
  return (
    <section style={{padding:"60px 30px", maxWidth:"1200px", margin:"auto"}}>
      <h2 style={{textAlign:"center"}}>Field Gallery</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:"20px", marginTop:"30px"}}>
        {gallery.map((img, idx) => (
          <img key={idx} src={img} alt={`Field ${idx+1}`} style={{width:"100%", borderRadius:"8px"}} />
        ))}
      </div>
    </section>
  );
};

export default FieldGallery;
