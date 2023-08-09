// import React, { useState } from "react";

// const Navbar = () => {
//   const [isNavActive, setIsNavActive] = useState(false);

//   const toggleNav = () => {
//     setIsNavActive(!isNavActive);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">Train App</div>
//       <div className={`nav-links ${isNavActive ? "active" : ""}`}>
//         <ul className="lists">
//           <li>
//             <a href="#home">Home</a>
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </div>
//       <div
//         className={`menu-icon ${isNavActive ? "active" : ""}`}
//         onClick={toggleNav}
//       >
//         ☰
//       </div>

//       <div className="search-bar">
//         <input type="text" placeholder="Search..." />
//         <button>Search</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Train App</div>
    <ul className="nav-links">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button>Search</button>
    </div>
  </nav>
);

export default Navbar;
