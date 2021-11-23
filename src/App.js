import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar'
import TentangKami from './pages/tentangKami/tentangKami'
import LokasiPerumahan from './pages/lokasiPerumahan/lokasiPerumahan'
import ProdukKami from './pages/produkKami/produkKami'
import Fasilitas from './pages/fasilitas/fasilitas'
import Siteplan from './pages/siteplan/siteplan'
import HargaKPR from './pages/hargaKpr/hargaKpr'



function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{justifyContent:'center'}}>
        <TentangKami />
        <LokasiPerumahan />
        <ProdukKami />
        <Fasilitas />
        <Siteplan />
        <HargaKPR />
      </div>
    </div>
  );
}

export default App;
