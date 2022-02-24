import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import { RoomProvider } from "./context";

function App() {
  return (
    <RoomProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rooms/" element={<Rooms />} />
          <Route exact path="/rooms/:slug" element={<SingleRoom />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </RoomProvider>
  );
}

export default App;
