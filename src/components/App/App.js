import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function toggleBurgerOpen() {
    setIsBurgerOpen(!isBurgerOpen);
  }
  return (
    <div className="App">
      <Header toggleBurger={toggleBurgerOpen} isOpen={isBurgerOpen} />
      <Main />
    </div>
  );
}

export default App;
