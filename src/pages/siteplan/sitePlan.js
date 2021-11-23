import React, { useState, useEffect } from 'react';
import siteplan from '../../assets/siteplan.png'
import Button from '../../components/button/button'
import './siteplan.css'

class Siteplan extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
          };
      }
    
    render() {
        return <div className="siteplanContainer">
            <div style={{ maxWidth: '1000px' }}>
                <div className='titleContainer'>
                    <div className='fontTitle'>SITEPLAN</div>
                    <div className='greenDivider'/>
                </div>
                <div className='sitePlanBodyContainer'>
                    <div style={{maxWidth: '450px', margin: '20px'}}>
                        <img class='siteplanPict' src={siteplan} alt="promoImage" />
                    </div>
                    <div>
                        <div className='siteplanBiasa'>
                            <p>
                                Luas Lahan Saat ini <span className='mainGreen siPertegas'>1,3 HA</span>
                            </p>
                            <p>
                                Total Unit <span className='mainGreen siPertegas'>90 Unit</span>
                            </p>
                        </div>
                        <div className='siteplanYangDisegerakan'>
                            <div className='siteplanSegera'>
                                SEGERA!
                            </div>
                            <p>
                                Rencana pengembangan <span className='mainGreen siPertegas'> ±3 HA</span>
                            </p>
                            <p>
                                Dengan jumlah unit hingga <span className='mainGreen siPertegas'> 300 Unit </span>
                            </p>
                        </div>
                        <div className='buttonContainerTop'>
                            <div style={{height: '67px', width:'250px', marginLeft: '20px', marginTop: '40px'}}>
                                <Button text={"BOOKING SEKARANG"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
  }

export default Siteplan