import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import ProductPC from "./Components/ProductPC";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner />
      <Product />
      <ProductPC />
    </div>
  );
}

export default App;
