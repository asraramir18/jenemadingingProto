import React, { useState, useEffect } from 'react';
import siteplan from '../../assets/siteplan.png'
import Button from '../../components/button/button'
import './siteplan.css'

const chatWa = "https://wa.me/+6285697106270?text=Hi%20Admin.%20Saya%20mau%20booking%20unit%20di%20Je'nemadinging%20Regency!"

class Siteplan extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
          };
      }
    
    render() {
        return <div id="section5" className="siteplanContainer">
            <div style={{ maxWidth: '1000px' }}>
                <div className='titleContainer'>
                    <div className='fontTitle'>SITEPLAN</div>
                    <div className='greenDivider'/>
                </div>
                <div className='sitePlanBodyContainer'>
                    <div style={{maxWidth: '450px', margin: '20px'}}>
                        <img loading='lazy' className='siteplanPict' src={siteplan} alt="promoImage" />
                    </div>
                    <div>
                        <div className='siteplanBiasa'>
                            <p className='siteplanText'>
                                Luas Lahan Saat ini <span className='mainGreen siPertegas'>1,3 HA</span>
                            </p>
                            <p className='siteplanText'>
                                Total Unit <span className='mainGreen siPertegas'>90 Unit</span>
                            </p>
                        </div>
                        <div className='siteplanYangDisegerakan'>
                            <div className='siteplanSegera'>
                                SEGERA!
                            </div>
                            <p className='siteplanText'>
                                Rencana pengembangan <span className='mainGreen siPertegas'> ±3 HA</span>
                            </p>
                            <p className='siteplanText'>
                                Dengan jumlah unit hingga <span className='mainGreen siPertegas'> 300 Unit </span>
                            </p>
                        </div>
                        <div className='buttonContainerTop'>
                            <div className='sitePlanButton'>
                                <Button onClick={() => window.open(chatWa,'_blank')} text={"BOOKING SEKARANG"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
  }

export default Siteplan