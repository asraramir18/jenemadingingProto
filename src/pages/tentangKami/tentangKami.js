import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'
import ads2 from '../../assets/ads2.png'
import './tentangKami.css'

class TentangKami extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
          };
      }
    
    render() {
        return <div className="tentangKamiContainer">
            <div style={{ maxWidth: '780px' }}>
                <div class="tentangKamiBannerContainer">
                    <div>
                        <img class='tentangKamiLogo' src={logo} alt="promoImage" />
                    </div>
                    <div className="tentangKamiBanText">
                        <div className='tentangKamiComName mainGreen'>PT SUKSES SEJAHTERA LAND</div>
                        <div className='tentangKamiAlamat'>Jl. Andi Tonro Perumahan Andi Tonro Permai, Blok D1 No. 3, 92114, Gowa</div>
                        <div className='greenDivider'/>
                    </div>
                </div>
                <div>
                    <div style={{padding: '20px'}}>
                        <img class='tentangKamiPict' src={ads2} alt="promoImage" />
                    </div>
                    <div className='tentangKamiMainTextContainer'>
                        PT. Sukses Sejahtera Land merupakan perusahaan yang bergerak di bidang properti (real estate) khususnya di perumahan subsidi. 
                        <span className="mainGreen bold"> Je’nemadinging Regency </span>merupakan salah satu proyek perumahan subsidi kami yang menyediakan rumah 
                        <span className="mainGreen bold"> tipe 38/72 </span>dengan harga <span className="mainGreen bold">Rp. 156.500.000 </span> 
                        dan angsuran mulai dari <span className="mainGreen bold">900an-rb</span>
                    </div>
                </div>
            </div>
        </div>
    }
  }

export default TentangKami