// import './Header.css';

// export default function Header() {
//   return (
//     <header className="header">
//       <h1 className="header-title">Dashboard</h1>

//       <div className="header-search">
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a4a6f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="11" cy="11" r="8" />
//           <line x1="21" y1="21" x2="16.65" y2="16.65" />
//         </svg>
//         <input placeholder="Search here..." />
//       </div>

//       <div className="header-actions">
//         <button className="locale">
//           <span className="flag">🇮🇳</span>
//           <span>Eng (IND)</span>
//           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <polyline points="6 9 12 15 18 9" />
//           </svg>
//         </button>

//         <button className="notif" aria-label="Notifications">
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59342" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
//             <path d="M13.7 21a2 2 0 0 1-3.4 0" />
//           </svg>
//           <span className="dot" />
//         </button>

//         <div className="profile">
//           <div className="avatar" aria-label="User avatar">
//             <svg width="36" height="36" viewBox="0 0 36 36">
//               <defs>
//                 <linearGradient id="ag" x1="0" y1="0" x2="1" y2="1">
//                   <stop offset="0" stopColor="#7a8aff" />
//                   <stop offset="1" stopColor="#5a5ce0" />
//                 </linearGradient>
//               </defs>
//               <circle cx="18" cy="18" r="18" fill="url(#ag)" />
//               <circle cx="18" cy="14" r="6" fill="#fff" />
//               <path d="M6 32c1-6 7-9 12-9s11 3 12 9z" fill="#fff" />
//             </svg>
//           </div>
//           <div className="who">
//             <div className="name">Vishu</div>
//             <div className="role">Admin</div>
//           </div>
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
//             <polyline points="6 9 12 15 18 9" />
//           </svg>
//         </div>
//       </div>
//     </header>
//   );
// }


import "./Header.css";

import {
  FiSearch,
  FiChevronDown,
  FiBell,
  FiUser,
} from "react-icons/fi";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Dashboard</h1>

      <div className="header-search">
        <FiSearch size={18} />
        <input placeholder="Search here..." />
      </div>

      <div className="header-actions">

        <button className="locale">
          <span className="flag">🇮🇳</span>
          <span>Eng (IND)</span>
          <FiChevronDown size={14} />
        </button>

        <button
          className="notif"
          aria-label="Notifications"
        >
          <FiBell size={20} />
          <span className="dot" />
        </button>

        <div className="profile">

          <div className="avatar">
            <FiUser size={18} />
          </div>

          <div className="who">
            <div className="name">Vishu</div>
            <div className="role">Admin</div>
          </div>

          <FiChevronDown size={14} />
        </div>

      </div>
    </header>
  );
}