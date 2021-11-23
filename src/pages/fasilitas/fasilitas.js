import React, { useState, useEffect } from 'react';
import Mesjid from '../../assets/icon/Mesjid.png'
import Grosir from '../../assets/icon/Grosir.png'
import Ibadah from '../../assets/icon/Ibadah.png'
import Pos from '../../assets/icon/Pos.png'
import Sekolah from '../../assets/icon/Sekolah.png'
import Taman from '../../assets/icon/Taman.png'
import Tps from '../../assets/icon/Tps.png'
import Wisata from '../../assets/icon/Wisata.png'
import Button from '../../components/button/button'
import './fasilitas.css'

class Fasilitas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
          };
      }
    
    render() {
        return <div style={{ backgroundColor:'#F2F2F2', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingBottom: '30px', paddingTop: '30px' }}>
            <div style={{ maxWidth: '1000px',display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <div style={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <div className='fontTitle'>FASILITAS</div>
                    <div className='greenDivider'/>
                </div>
                <div className='daftarFasilitasContainer'>
                    {fasilitasUmum.map((data) => {
                        return <div style={{ display: 'flex', flexDirection:'column', justifyContent:'center', maxWidth: '600px', margin: '20px'}}>
                        <h1 className='mainGreen'>
                            {data.jenisFasilitas}
                        </h1>
                        <div className='fasilitasDaftar'>
                            {data.daftarFasilitas.map((data) => {
                            return <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ aspectRatio: '1', maxWidth: '24px' }}>
                                    <img className='fasilitasIcon' src={data.icon} alt={data.text}  />
                                </div>
                                <p className='pStyle' style={{ margin: '10px' }}>{data.text}</p>
                            </div>
                            })}
                        </div>
                    </div>
                    })}
                </div>
                <div style={{height: '67px', width:'200px', margin: '20px'}}>
                    <Button text={"TANYA ADMIN"}/>
                </div>
            </div>
        </div>
    }
  }

export default Fasilitas

const fasilitasUmum = [{
    jenisFasilitas: 'FASILITAS PERUMAHAN',
    daftarFasilitas: [{
        icon: Mesjid,
        text: 'MASJID'
    }, {
        icon: Taman,
        text: 'TAMAN BERMAIN'
    }, {
        icon: Pos,
        text: 'POS SATPAM'
    }, {
        icon: Tps,
        text: 'TPS'
    }]
}, {
    jenisFasilitas: 'FASILITAS SEKITAR PERUMAHAN',
    daftarFasilitas: [{
        icon: Sekolah,
        text: 'SEKOLAH (TK, SD, SMP, PESANTREN)'
    }, {
        icon: Grosir,
        text: 'PUSAT GROSIR BTP'
    }, {
        icon: Wisata,
        text: 'WISATA KELUARGA (BUGIS WATERPARK)'
    }, {
        icon: Ibadah,
        text: 'TEMPAT IBADAH'
    }]
}]
