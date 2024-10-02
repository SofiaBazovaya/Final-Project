import Head from "./components/head/head";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
        <ScrollToTop />
        <Head />
        <Main />
        <Footer />
    </div>
  );
}
export default App;
