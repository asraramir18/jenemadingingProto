import React, { useState, useEffect } from 'react';
import denah from '../../assets/denah.png'
import Button from '../../components/button/button'
import './lokasiPerumahan.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const chatWa = 'https://wa.me/+6285697106270?text=Hi%20Admin.%20Saya%20berminat%20untuk%20Cek%20Lokasi%20di%20Je%E2%80%99nemadinging%20Regency!'

class LokasiPerumahan extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageLoad: true,
            googleMapLoad: true
          };
      }
    
    render() {
        return <div id="section2" style={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingBottom: '30px' }}>
            <div style={{ maxWidth: '780px', padding: '20px' }}>
                <div style={{display: 'flex', flexDirection:'column'}}>
                    <div className="lokasiPerumahanTitleContainer">
                        <div className="fontTitle">LOKASI PERUMAHAN</div>
                        <div className="lokasiAlamatText">Jl. Poros Je’nemadinging Kec. Pattallassang, Gowa</div>
                        <div className='greenDivider' />
                    </div>
                    <div>
                        {this.state.imageLoad && <Skeleton className='lokasiPerumahanImgSkeleton' />}
                        <img loading='lazy' onLoad={() => this.setState({ imageLoad: false })} className='lokasiPixt' src={denah} alt="promoImage" />
                    </div>
                </div>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
                {this.state.googleMapLoad && <Skeleton className='lokasiPerumahanGmapsSkeleton' />}
                <iframe className='googleMaps' onLoad={() => { this.setState({ googleMapLoad: false })}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15894.261328638342!2d119.536096!3d-5.17339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8aaa8ae3d32d0362!2sJe%E2%80%99nemadinging%20Regency!5e0!3m2!1sen!2sid!4v1637206053762!5m2!1sen!2sid" width="600" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div style={{height: '80px', width:'250px', margin: '20px'}}>
                <Button onClick={() => window.open(chatWa,'_blank')} text={"CEK LOKASI"}/>
            </div>
        </div>
    }
  }

export default LokasiPerumahan