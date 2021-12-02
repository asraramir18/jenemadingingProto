import React, { useState, useEffect } from 'react';
import './videoPerum.css'

class VideoPerum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
          };
      }
    
    render() {
        return <div id="section7" style={{ backgroundColor:'#F2F2F2', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingBottom: '30px', paddingTop: '30px' }}>
            <div style={{ width: '100%', maxWidth: '800px',display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <div style={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <div className='fontTitle'>VIDEO PERUMAHAN</div>
                    <div className='greenDivider'/>
                </div>
                <iframe className='youtubeVideo'  width="560" height="315" src="https://www.youtube.com/embed/CWELyhrV3KM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    }
  }

export default VideoPerum