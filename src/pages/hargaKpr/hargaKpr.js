import React, { useState, useEffect } from 'react';
import angsuran from '../../assets/angsuran.png'
import Button from '../../components/button/button'
import './hargaKpr.css'

class HargaKPR extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
          };
      }
    
    render() {
        return <div className='hargaKPRAngsuranContainer'>
            <div className='hargaKPRContainer'>
                <div className='fontTitle'>HARGA & PERSYARATAN KPR</div>
                <div className='greenDivider'/>
                {/* <div style={{ display: 'flex', flexDirection: 'row'}}> */}
                <div className='hargaKprGridItemContainer'>
                    {/* <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1000px', margin: '10px' }}> */}
                        <div className='hargaKprGridtItemHeight'>
                            <div className="containerHargaTitle hargaTitle hargaKprBold paddingLeftHargaKpr">
                                Harga Jual
                            </div>
                            <div className="kprGradientText hargaKprBold paddingLeftHargaKpr">
                                RP 156.500.000*
                            </div>
                        </div>
                        <div className='hargaKprGridtItemHeight'>
                            <div className="containerHargaTitle hargaTitle paddingLeftHargaKpr">
                                DP (DOWN PAYMENT)
                            </div>
                            <div className="kprGradientText paddingLeftHargaKpr">
                                RP 8.000.000
                            </div>
                        </div>
                        <div className='hargaKprGridtItemHeight'>
                            <div className="containerHargaTitle hargaTitle paddingLeftHargaKpr">
                                ANGSURAN MULAI DARI
                            </div>
                            <div className="kprGradientText paddingLeftHargaKpr">
                                RP 993.100*/BULAN
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className='hargaKprGridtItemHeight'>
                            <div className="containerHargaTitle hargaTitle paddingLeftHargaKpr">
                                TANDA JADI (BOOKING FEE)
                            </div>
                            <div className="kprGradientText paddingLeftHargaKpr">
                                RP 2.000.000
                            </div>
                        </div>
                        <div className='hargaKprGridtItemHeight'>
                            <div className="containerHargaTitle hargaTitle paddingLeftHargaKpr">
                                BIAYA-BIAYA
                            </div>
                            <div className="kprGradientText paddingLeftHargaKpr">
                                RP 15.675.000
                            </div>
                            <div className="biayaAkadText paddingLeftHargaKpr">
                                (BIAYA AKAD, BIAYA NOTARIS, BPHTB, PPH, BALIK NAMA, DLL)
                            </div>
                        </div>
                        <div className='hargaKprGridtItemHeight'>
                            <div className="containerHargaTitle hargaTitle paddingLeftHargaKpr">
                                SUBSIDI UANG MUKA (DP)
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center'}}>
                                <div className="subsidiTextAwal paddingLeftHargaKpr">MULAI</div>
                                <div className="kprGradientText" style={{ paddingRight: '0px!important'}}>RP 4.000.000</div>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div className="subsidiTextAwal" style={{ paddingLeft: '45px'}}>S/D</div>
                                <div className="kprGradientText" style={{ paddingRight: '10px'}}>RP 40.000.000</div>
                            </div>
                            <div className="sukuBungaText mainGreen paddingLeftHargaKpr">
                                SUKU BUNGA TETAP (FLAT)
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1000px' }}>
                <div>
                    <div className='fontTitle'>ANGSURAN</div>
                    <img class='produkPixt' src={angsuran} alt="promoImage" />
                </div>
                <div>
                    <div className='fontTitle'>PERSYARATAN KPR</div>
                    <div style={{ display: 'flex'}}>
                        <ol>
                            {persyaratanKpr1.map((data) => {
                                return<li>
                                    {data}
                                </li>
                            })}
                        </ol>
                        <ol style={{start: "8"}}>
                            {persyaratanKpr2.map((data) => {
                                return<li>
                                    {data}
                                </li>
                            })}
                        </ol>
                    </div>
                </div>
            </div>
            <div style={{height: '67px', width:'200px', margin: '20px'}}>
                <Button text={"BOOKING SEKARANG"}/>
            </div>
        </div>
    }
  }

export default HargaKPR



const persyaratanKpr1 = ['Fotocopy KTP Suami/Istri',
'Fotocopy Kartu Keluarga',
'Fotocopy Surat Nikah / Jika Belum Menikah, Keterangan Kelurahan/Desa',
'Pas Foto Suami/Istri 3x4',
'Fotocopy Rekening Koran 3 bulan terakhir',
'Fotocopy NPWP Pribadi dan SPT Tahunan',
'Untuk wiraswasta melampirkan keterangan usaha dari lurah/desa',
]

const persyaratanKpr2 = ['PNS/Kary.Swasta/TNI/POLRI SK. Pertama dan terakhir dan SK Kenaikan Pangkat terakhir',
    'Surat Keterangan Penghasilan atau Slip Gaji yang dilegalisir 3 bulan terakhir',
    'Surat Keterangan belum memiliki rumah (Kelurahan/Desa)',
    'Surat Keterangan Bekerja (Karyawan Swasta)',
    'Berkas FLPP'
]