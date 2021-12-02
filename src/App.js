import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import TentangKami from './pages/tentangKami/tentangKami'
import LokasiPerumahan from './pages/lokasiPerumahan/lokasiPerumahan'
import ProdukKami from './pages/produkKami/produkKami'
import Fasilitas from './pages/fasilitas/fasilitas'
import Siteplan from './pages/siteplan/siteplan'
import HargaKPR from './pages/hargaKpr/hargaKpr'
import VideoPerum from './pages/videoPerum/videoPerum'
import SosialMedia from './pages/sosmed/sosmed'



function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{justifyContent:'center'}}>
      <SosialMedia />
        <TentangKami/>
        <LokasiPerumahan/>
        <ProdukKami/>
        <Fasilitas />
        <Siteplan />
        <HargaKPR />
        <VideoPerum />

      </div>
      <Footer />
    </div>
  );
}

export default App;
