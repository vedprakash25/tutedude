import { useState } from "react";
import { CreatedContextWithDefaultValue } from "./context/useTheme";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Notfound from "./pages/notfound";
import Home from "./pages/home";
import Navbar from "./cmp/navbar";
import Footer from "./cmp/footer";

function App() {
  const [themeState, setThemeState] = useState<string>("light");
  function handleTheme() {
    themeState === "light" ? setThemeState("dark") : setThemeState("light");
  }

  return (
    <>
      <CreatedContextWithDefaultValue.Provider
        value={{ theme: themeState, toggleTheme: handleTheme }}
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            Component={Home}
          ></Route>

          <Route
            path="/about"
            Component={About}
          ></Route>

          <Route
            path="/contact"
            Component={Contact}
          ></Route>

          <Route
            path="*"
            Component={Notfound}
          ></Route>
        </Routes>
        <Footer />
      </CreatedContextWithDefaultValue.Provider>
    </>
  );
}

export default App;
