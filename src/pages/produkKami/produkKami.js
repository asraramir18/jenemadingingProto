import React, { useState, useEffect } from 'react';
import rumah from '../../assets/rumah.png'
import garasi from '../../assets/garasi.png'
import mandi from '../../assets/mandi.png'
import tidur from '../../assets/tidur.png'
import tamu from '../../assets/tamu.png'
import denah1 from '../../assets/denah1.png'
import denah2 from '../../assets/denah2.png'
import DenahRumah from '../../assets/DenahRumah.png'
import Button from '../../components/button/button'
import './produkKami.css'
import zIndex from '@material-ui/core/styles/zIndex';

const dataRuangan = [{
    gambar: tidur,
    text: '2 KAMAR TIDUR'
}, {
    gambar: tamu,
    text: 'RUANG TAMU'
}, {
    gambar: mandi,
    text: 'KAMAR MANDI'
}, {
    gambar: garasi,
    text: 'GARASI MOBIL'
}, ]

class ProdukKami extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
        };
    }

    
    render() {
        return <div style={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingBottom: '30px' }}>
            <div style={{ maxWidth: '1200px', padding: '20px' }}>
                <div style={{display: 'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                    <div className="produkTitleContainer">
                        <div className="fontTitle">PRODUK KAMI</div>
                        <div className='greenDivider' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                        <img class='produkPixt' src={rumah} alt="promoImage" />
                    </div>
                    <div className='productDenahPenjelasanContainer'>
                        <div className="produkRmhTxtContainer">
                            <div className="oswald gradientText tipeRumah">
                                Tipe Rumah
                            </div>
                            <div className="oswald gradientText tipeRumahAngka">36 / 72</div>
                            <div style={{display:'flex'}}>
                                <div className="oswald gradientText tipeRumahKet">Luas Bangunan</div>
                                <div style={{width: '50px'}} />
                                <div className="oswald gradientText tipeRumahKet">Luas Tanah</div>
                            </div>
                        </div>
                        <div className="productKamarGridItemContainer">
                            {dataRuangan.map((data) => {
                                return <div className='ruanganContainer'>
                                    <div className='iconContainer'>
                                        <img className='ruanganIcon' src={data.gambar} alt="promoImage" />
                                    </div>
                                    <p className="mainGreen ruanganText">{data.text}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <img class='produkPixtDenah' src={DenahRumah} alt="promoImage" />
                </div>
            </div>
            <div style={{height: '67px', width:'200px', margin: '20px'}}>
                <Button text={"TANYA ADMIN"}/>
            </div>
        </div>
    }
  }

export default ProdukKami