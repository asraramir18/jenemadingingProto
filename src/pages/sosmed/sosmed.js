import React, { useState, useEffect } from 'react';
import Button from '../../components/button/button'
import facebook from '../../assets/icon/facebook.png'
import instagram from '../../assets/icon/instagram.png'
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
            accessToken: 'your-token'
          });
          feed.run();
      }

      igScript() {
        console.log('IS THIS RUNNING first ?')
        
      }
    
      async componentDidMount(){
        const scriptInstall = document.createElement("script");
        const scriptUse = document.createElement("script");
        const script = document.createElement("script");
        
        document.head.appendChild(script);
        document.body.appendChild(scriptInstall);
        document.body.appendChild(scriptUse);
        script.src = "../../js/instafeed.min.js";
        script.async = true;
        script.onload = () => this.runScriptMethods();

        scriptInstall.src = "../../js/instafeed.min.js";
        scriptInstall.async = true;

        scriptUse.src = "../../js/instafeed.min.js";
        scriptUse.onload = () => this.igScript()
        scriptUse.async = true
        console.log("THIS IS RUNNING ASNYC 1")
        console.log("THIS IS RUNNING ASNYC 2")
      }
    
    render() {
        return <div id="section8" style={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingBottom: '30px', paddingTop: '30px' }}>
            <div style={{ width: '100%', maxWidth: '800px',display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <div style={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <div className='fontTitle'>SOSIAL MEDIA</div>
                    <div className='greenDivider'/>
                </div>
                <div style={{ height: '200px' }}>
                <script type="text/javascript"></script>
                <div id="instafeed"></div>
                </div>
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