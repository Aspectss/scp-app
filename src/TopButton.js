import React, { useState, useEffect } from "react";
import './Styles.css';  // Add appropriate styling in this CSS file

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <i className='bx bx-up-arrow-circle'></i>  {<box-icon name='up-arrow-circle'></box-icon>}
        </div>
      )}
    </div>   
  );
};

export default TopButton;







// function TopButton() {
//   return (
//     <div className="button-container">
//       <a className="custom-button" href="index.html">Top</a>
//     </div>
//   );
// }  
// export default TopButton;