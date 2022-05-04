import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/LandingPages";
import LandingPages from "./pages/LandingPages";
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <Home />
        </>
      ) : (
        <Login />
      )}
      <Routes>
        <Route path="/">{LandingPages}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
