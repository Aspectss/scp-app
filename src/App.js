import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Info from './Info';
import TopButton from './TopButton';
import Scp from './Scp';
import SCPdata from './SCP.json';
import './Styles.css';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Info />
      {Array.isArray(SCPdata.data) && SCPdata.data.map((SCP, index) => (
        <Scp
          key={index}  // Using the index as a key for simplicity
          id={index}  // Passing the index as an id
          subject={SCP.subject}
          class={SCP.class}
          desc={SCP.description}
          containment={SCP.containment}
          image={SCP.image}  // Passing the image prop
        />
      ))}
      <TopButton />
    </>
  );
}

export default App;