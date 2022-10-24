import "./sidenavbar.css";
import { useEffect, useState } from "react";

export const SideNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE}/categories`
        );
        const { categories } = await response.json();
        console.log(categories);
        setCategories(categories);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);

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
