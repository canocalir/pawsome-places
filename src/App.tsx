import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRoute from "./routes/AppRoute";

import { GlobalStyles } from "./styles/globalStyles";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <AppRoute />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
