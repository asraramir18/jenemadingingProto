import React, { useState, useEffect } from 'react';
import rumah from '../../assets/rumah.png'
import garasi from '../../assets/garasi.png'
import mandi from '../../assets/mandi.png'
import tidur from '../../assets/tidur.png'
import tamu from '../../assets/tamu.png'
import denah1 from '../../assets/denah1.png'
import denah2 from '../../assets/denah2.png'
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
                    <div>
                        <img class='produkPixt' src={rumah} alt="promoImage" />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div className="produkRmhTxtContainer">
                            <div className="oswald gradientText" style={{ fontSize: '30px' }}>
                                Tipe Rumah
                            </div>
                            <div className="oswald gradientText" style={{ fontSize: '72px', fontWeight: '700px'}}>36 / 72</div>
                            <div style={{display:'flex'}}>
                                <div className="oswald gradientText" style={{ fontSize: '20px', fontWeight: '700px'}}>Luas Bangunan</div>
                                <div style={{width: '50px'}} />
                                <div className="oswald gradientText" style={{ fontSize: '20px', fontWeight: '700px'}}>Luas Tanah</div>
                            </div>
                        </div>
                        <div className="productKamarGridItemContainer">
                            {dataRuangan.map((data) => {
                                return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '180px'}}>
                                    <img className='produkPixt' src={data.gambar} alt="promoImage" />
                                    <p className="mainGreen" style={{ marginLeft:'10px', fontWeight: '700px'}}>{data.text}</p>
                                </div>
                            })}
                        </div>
                        {/* <div className="productKamarGridItemContainer">
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img className='produkPixt' src={tidur} alt="promoImage" />
                                    <p className="mainGreen" style={{ width: '-10px', fontWeight: '700px'}}>2 KAMAR TIDUR</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img className='produkPixt' src={tamu} alt="promoImage" />
                                    <p className="mainGreen" style={{ fontWeight: '700px'}}>RUANG TAMU</p>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img className='produkPixt' src={mandi} alt="promoImage" />
                                    <p className="mainGreen" style={{ fontWeight: '700px'}}>KAMAR MANDI</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img className='produkPixt' src={garasi} alt="promoImage" />
                                    <p className="mainGreen" style={{ fontWeight: '700px'}}>GARASI MOBIL</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', height: '700px'}}>
                <div style={{ position: 'absolute', zIndex: '1', left: '200px'}}>
                    <img class='produkPixt' src={denah1} alt="promoImage" />
                </div>
                <div style={{ position: 'absolute' }}>
                    <img class='produkPixt' src={denah2} alt="promoImage" />
                </div>
            </div>
            <div>
                <div className='greenDivider' />
                <div className="fontTitle">DENAH KAMI</div>
            </div>
            <div style={{height: '67px', width:'200px', margin: '20px'}}>
                <Button text={"TANYA ADMIN"}/>
            </div>
        </div>
    }
  }

export default ProdukKami