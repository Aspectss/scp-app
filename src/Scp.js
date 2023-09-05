import React from 'react';

function Scp({ subject, class: scpClass, desc, containment, image }) {
  return (
    <div className="scp-card" id={subject.split(": ")[1]}>  
      <h3 className="headings">{subject}</h3>
      <h4 className="headings">{scpClass}</h4>
      
      {image && (
        <div className="image-wrapper">
          <img src={image} alt={subject} />
        </div>
      )}
      
      <h4 className="sub-headings">Containment:</h4>
      {containment.map((para, index) => (
        <div className="scp-para" key={index} dangerouslySetInnerHTML={{ __html: para }} />
      ))}
      
      <h4 className="sub-headings">Description:</h4>
      {desc.map((para, index) => (
        <div className="scp-para" key={index} dangerouslySetInnerHTML={{ __html: para }} />
      ))}
    </div>
  );
}

export default Scp;