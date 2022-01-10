import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
// import Topbar from "./components/topbar/Topbar";

const App = () => {
  return (
    <div>
      {/* <Topbar /> */}
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
