import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRoute from "./routes/AppRoute";

import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <AppRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
