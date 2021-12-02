import React, { useState, useEffect } from 'react';
import LocJene from '../../assets/icon/LocJene.png'
import ClockJene from '../../assets/icon/ClockJene.png'
import WhatsappJene from '../../assets/icon/WhatsappJene.png'
import footerLogo from '../../assets/footerLogo.png'
import './footer.css'

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
          };
      }
    
    render() {
        return <div style={{ backgroundColor:'#1E5B54', display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <div className='footerContainer'>
                <div className='footerSectionContainer'>
                    <h1 className='footerHeader'>Kantor Pemasaran</h1>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div className='footerIconContainer'>
                            <img loading='lazy' className='footerIcon' src={LocJene} alt='locJene'  />
                        </div>
                        <div>
                            <p className='footerText'>Je’nemadinging Regency,</p>
                            <p className='footerText'>Jl. Poros Je’nemadinging Kec. Pattallassang, Gowa</p>
                        </div>
                    </div>
                </div>
                <div className='footerSectionContainer'>
                    <h1 className='footerHeader'>Jam Operasional</h1>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div className='footerIconContainer'>
                            <img loading='lazy' className='footerIcon' src={ClockJene} alt='clockJene'  />
                        </div>
                        <p className='footerText'>Setiap Hari (09.00-17.00 WITA)</p>
                    </div>
                </div>
                <div className='footerSectionContainer'>
                    <h1 className='footerHeader'>Contact Person</h1>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div className='footerIconContainer'>
                            <img loading='lazy' className='footerIcon' src={WhatsappJene} alt='whatsaapJene'  />
                        </div>
                        <p className='footerText'>0822 3293 2760 (Aan)</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div className='footerIconContainer'>
                            <img loading='lazy' className='footerIcon' src={WhatsappJene} alt='whatsaapJene'  />
                        </div>
                        <p className='footerText'>0856 9710 6270 (Syadiq)</p>
                    </div>
                </div>
                <div className='footerLogoContainer'>
                    <h1 className='footerLogoDeveloped'>Developed By:</h1>
                    <img loading='lazy' className='footerLogo' src={footerLogo} alt='whatsaapJene'  />
                </div>
            </div>
        </div>
    }
  }

export default Footer