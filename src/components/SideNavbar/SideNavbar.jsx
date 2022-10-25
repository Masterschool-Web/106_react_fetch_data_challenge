import "./sidenavbar.css";
import { useState } from "react";

export const SideNavbar = () => {
  const [categories, setCategories] = useState([]);

  // TODO: Fetch all categories

  return (
    <div className='side-navbar'>
      <h2>Categories</h2>
      <ul>
        {categories.sort().map((category) => (
          <li>
            <button>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
