import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Products } from "./components/products/Products";
import { SideNavbar } from "./components/SideNavbar/SideNavbar";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Products />
      <SideNavbar />
      <Footer />
    </div>
  );
};

export default App;
