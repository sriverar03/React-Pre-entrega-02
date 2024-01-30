import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { Error404 } from "./components/Error404";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  let mensaje = "Esta Página  esta en Construcción..";

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer data={mensaje} />} />
        <Route path={"/productos"} element={<ItemListContainer />} />
        <Route path={"/producto/:id"} element={<ItemDetailContainer />} />
        <Route path={"/categoria/:id"} element={<ItemListContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
