import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import photo1 from "./images/photo1.png";
import photo2 from "./images/photo2.png";

function App() {
  return (
    <div className="container">
      <Header />
      <Content images={{ photo1, photo2 }} />
      <Footer />
    </div>
  );
}

export default App;
