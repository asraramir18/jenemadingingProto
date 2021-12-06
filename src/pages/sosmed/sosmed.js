import React, { useState, useEffect } from 'react';
import Button from '../../components/button/button'
import facebook from '../../assets/icon/facebook.png'
import instagram from '../../assets/icon/instagram.png'
import InstagramEmbed from 'react-instagram-embed';
import Instafeed from 'instafeed.js'

import {Helmet} from "react-helmet";
import './sosmed.css'

const chatWa = "https://wa.me/+6285697106270?text=Hi%20Admin.%20Saya%20mau%20booking%20unit%20di%20Je'nemadinging%20Regency!"
const igLink = "https://www.facebook.com/Jenemadinging-Regency-103834738122923"
const fbLink = "https://www.instagram.com/jenemadinging.regency/"


class SosialMedia extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
          };
      }

      runScriptMethods(){
          console.log('TES RUN SCRIPT')
          var feed = new Instafeed({
            accessToken: 'IGQVJYdy1uYm5LUlFfWFFYLUtZAWWY2cERKVDBSa3lzV3I3el9yN01BUFRTbHZAzQUFlQjltWmhqdkFENlFSYl91RERLVy1QajBRdHNMTm1LclNtdmlERjJvUC1kWTZALSzRndkFkQUprVDJRbUVIVUFZAVAZDZD',
            limit: 9,
            template: "<a href='{{link}}' class='instagramDisplayGridItem'><img class='imageIG' title='{{caption}}' src='{{image}}' /></a>"
          });
          feed.run();
      }

      igScript() {
        console.log('IS THIS RUNNING first ?')
        
      }
    
      async componentDidMount(){
        const scriptInstall = document.createElement("script");
        const scriptUse = document.createElement("script");
        
        document.body.appendChild(scriptInstall);
        document.body.appendChild(scriptUse);

        scriptInstall.src = "../../js/instafeed.min.js";
        scriptInstall.async = true;

        scriptUse.src = "../../js/instafeed.min.js";
        scriptUse.onload = () => this.runScriptMethods()
        scriptUse.async = true
        console.log("THIS IS RUNNING ASNYC 1")
      }
    
    render() {
        return <div id="section8" style={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingBottom: '30px', paddingTop: '30px' }}>
            <div style={{ width: '100%', maxWidth: '900px',display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <div style={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <div className='fontTitle'>SOSIAL MEDIA</div>
                    <div className='greenDivider'/>
                </div>
                <div id="instafeed" className="instagramDisplayGrid"></div>
                <div className='sosmedIGFBContainer'>
                    <div  onClick={() => window.open(igLink,'_blank')} className='sosmedIconContainer'>
                        <img loading='lazy' className='sosmedLogoImg' src={instagram} alt='instagramSosmed'  />
                        <span className='sosmedText'>@jenemadinging.regency</span>
                    </div>
                    <div onClick={() => window.open(fbLink,'_blank')} className='sosmedIconContainer'>
                        <img loading='lazy' className='sosmedLogoImg' src={facebook} alt='facebookSosmed'  />
                        <span className='sosmedText'>Je’nemadinging Regency</span>
                    </div>
                </div>
                <div style={{height: '67px', width:'300px', margin: '20px'}}>
                    <Button onClick={() => window.open(chatWa,'_blank')} text={"BOOKING SEKARANG"}/>
                </div>
            </div>
        </div>
    }
  }

export default SosialMedia