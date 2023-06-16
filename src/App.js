import {BrowserRouter, Routes, Route} from "react-router-dom";
import PembayaranList from "./components/PembayaranList";
import TambahPembayaran from "./components/TambahPembayaran";
import EditPembayaran from "./components/EditPembayaran";
import DaftarPembayaran from "./components/DaftarPembayaran";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PembayaranList/>}/>
      <Route path="add"element={<TambahPembayaran/>}/>
      <Route path="list"element={<DaftarPembayaran/>}/>
      <Route path="edit/:id" element={<EditPembayaran/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
