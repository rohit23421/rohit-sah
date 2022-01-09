import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Works from "./components/works/Works"

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Works />
    </div>
  );
};

export default App;
