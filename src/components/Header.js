// import React from 'react';
// import { NavLink } from "react-router-dom";
// import homeButton from './home.png';
// import './Header.css';
//
// const Header = ({isHome, loggedIn}) => {
//
//   return (
//     <header>
//       <section className="header-content">
//         <h1>
//           <NavLink to={{
//             pathname:'/'
//           }}  className="site-title">Rancid<br/> Tomatillos
//           </NavLink>
//         </h1>
//           <NavLink to={{
//             pathname:'/'
//             }}>
//             {!loggedIn && <button>Log in</button>}
//             {loggedIn && <button>Log out</button>}
//           </NavLink>
//         {!isHome &&
//           <NavLink to={{
//             pathname:'/'
//             }}>
//             <img src={homeButton} alt="home button" className='home-button'/>
//           </NavLink>
//         }
//       </section>
//       <section className="gradient"></section>
//     </header>
//     )
//   }
//
//
// export default Header;
