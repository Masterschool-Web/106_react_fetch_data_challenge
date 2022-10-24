import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Products } from "./components/products/Products";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
