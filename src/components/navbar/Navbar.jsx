import "./navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div className='persona'>
        <img src='./logo.png' alt='logo' />
        <h1>Buy Now Regret Later</h1>
      </div>
      <a href='#cart'>
        <div className='cart'>
          <i className='fa-solid fa-cart-shopping'></i>
        </div>
      </a>
    </nav>
  );
};
