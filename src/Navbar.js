import React, { useState } from 'react'; //useEffect

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsNavCollapsed(true);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html"> </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-controls="navbarNavAltMarkup"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="navtxt">
              <a className="nav-link" href="#SCP-002" onClick={(e) => scrollToSection(e, 'SCP-002')}>SCP 002</a>
            </div>
            <div className="navtxt">
              <a className="nav-link" href="#SCP-003" onClick={(e) => scrollToSection(e, 'SCP-003')}>SCP 003</a>
            </div>
            <div className="navtxt">
              <a className="nav-link" href="#SCP-004" onClick={(e) => scrollToSection(e, 'SCP-004')}>SCP 004</a>
            </div>
            <div className="navtxt">
              <a className="nav-link" href="#SCP-005" onClick={(e) => scrollToSection(e, 'SCP-005')}>SCP 005</a>
            </div>
            <div className="navtxt">
              <a className="nav-link" href="#SCP-006" onClick={(e) => scrollToSection(e, 'SCP-006')}>SCP 006</a> 
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;